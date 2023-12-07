import { Component } from '@angular/core';
import { Album } from 'src/app/models/Album';
import { AlbumService } from 'src/app/services/album/album.service';
import {faX,faPlus, faRecordVinyl} from '@fortawesome/free-solid-svg-icons'
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  albums:Album[]=[];
  // this array is for creating the waiting animation
  repeat:Array<number>= new Array(12);
  deleteIcon=faX;
  plusIcon=faPlus;
  albumIcon=faRecordVinyl;
  isLoading:boolean=false;
  // the variable i am using to store the input from the search bar
  filterName:string='';
  // to improve the performance's search
  timeout:any=null;
  // to stop the template to be rendered until the data is fully loaded
  obs:Observable<any>=new Observable();

  constructor(private albumService:AlbumService,private sanitizer:DomSanitizer){
    this.getAlbums();    
  }
  getAlbums(){
    this.isLoading=true;
    this.obs=this.albumService.getAlbums();
    this.obs.subscribe(res=>{
      const albums=this.handleImages(res);
      this.albums=albums;
      this.isLoading=false;
    });
  }
  handleImages(albums:Album[]):Album[]{
    return albums.map(album=>{
        
      const imageURL= `data:${album.image.type};base64,${album.image.imageBytes}`
      const image = this.sanitizer.bypassSecurityTrustUrl(imageURL);
      album.image=image;
      return album;
    });

  }


  addAlbum(album:Album){
    this.albumService.addAlbum(album).subscribe(res=> this.getAlbums())
  }
  deleteAlbum($event:Event,id:number){
    $event.stopPropagation();
    this.albumService.deleteAlbum(id).subscribe(res=>this.getAlbums());
  }
  search(){
    this.isLoading=true;
    clearTimeout(this.timeout)
    this.timeout=setTimeout(() => {
      console.log(this.filterName); 
      this.albumService.getAlbumsByFilter(this.filterName).subscribe(res=>{
        const albums=this.handleImages(res);
        this.albums=albums;
        this.isLoading=false;
      });
      
    }, 1000);
  }

}
