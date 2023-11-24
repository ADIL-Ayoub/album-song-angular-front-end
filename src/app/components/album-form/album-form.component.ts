import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from 'src/app/models/Album';
import { AlbumService } from 'src/app/services/album/album.service';

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.css']
})
export class AlbumFormComponent {
  album:Album={
    id:0,
    name: '',
    views: 0 ,
    songs:null 
  };
  imagePath:string | ArrayBuffer | null=null;
  constructor(private albumService:AlbumService,
    private router:Router){
    
  }

  submitAlbum(){
    this.albumService.addAlbum(this.album).subscribe();
    this.router.navigate(['albums']); 
  }
  onSelectedFile(event:any){
    const file:File = event.target.files[0];

    if (file) {
      console.log(file);
      
    }
  }
}
