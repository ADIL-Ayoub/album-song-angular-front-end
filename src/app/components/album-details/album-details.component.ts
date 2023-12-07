import { ChangeDetectorRef, Component } from '@angular/core';
import { Album } from 'src/app/models/Album';
import { AlbumService } from 'src/app/services/album/album.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent {
  id:number=0;
  album:Album={
    id:0,
    name: '',
    views:0,
    image:null,
    songs:[] 
  };
  path:string='';
  isLoading:boolean=false;
  isPathChanging=false;
  constructor(private albumService: AlbumService,
     private route: ActivatedRoute,
     private sanitizer:DomSanitizer,
     private cdr:ChangeDetectorRef
     ){
    this.id=Number(route.snapshot.params['id']);
    this.getAlbumWithSongs(this.id);
    console.log(this.album);
  }
  getAlbumWithSongs(id:number){
    this.isLoading=true;
    return this.albumService.getAlbum(id).subscribe(res=>{
      this.album=this.handleImage(res);
      //this.path="../../../assets/music/"+ this.cleanPath(this.album.songs[0].path);
      console.log(this.path);
      
      this.isLoading=false;
    });
  }
  handleImage(album:Album):Album{
        
      const imageURL= `data:${album.image.type};base64,${album.image.imageBytes}`
      const image = this.sanitizer.bypassSecurityTrustUrl(imageURL);
      album.image=image; 
      return album;
  };
  changePath(path:string){
    this.isPathChanging=true;
    this.path="../../../assets/music/"+ this.cleanPath(path);
    this.cdr.detectChanges();
    this.isPathChanging=false;
    //console.log(this.path);
  }
  cleanPath(path:string):string{
    const temp= path.split("\\");
    const buffPath=temp.at(temp.length-2) + "/"+temp.at(temp.length-1);
    return buffPath;
   //const newPath=path.slice(58);
   //const index=newPath.indexOf('\\');
   //console.log(buffPath);
   //console.log(newPath.slice(0,index)+'/'+newPath.slice(index+1)); 
//   return newPath.slice(0,index)+'/'+newPath.slice(index+1);
  
    
}
  removeExtension(songName:string):string{
    const index=songName.lastIndexOf(".");
    return index!=-1? songName.slice(0,index):songName;
  }
  
  // test(){
  //  this.isPathChanging=false; 
  // }
}
