import { Component } from '@angular/core';
import { Album } from 'src/app/models/Album';
import { AlbumService } from 'src/app/services/album/album.service';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  albums:Album[]=[];

  constructor(private albumService:AlbumService){
    this.getAlbums();
    console.log(this.albums);
    
  }
  getAlbums(){
    this.albumService.getAlbums().subscribe(res=>this.albums=res);
  }
  addAlbum(album:Album){
    this.albumService.addAlbum(album).subscribe(res=> this.getAlbums())
  }
  deleteAlbum(id:number){
    this.albumService.deleteAlbum(id).subscribe(res=>this.getAlbums());
  }

}
