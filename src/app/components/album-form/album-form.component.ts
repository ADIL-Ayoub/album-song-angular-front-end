import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from 'src/app/models/Album';
import { Song } from 'src/app/models/Song';
import { AlbumService } from 'src/app/services/album/album.service';
import { SongService } from 'src/app/services/song/song.service';

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
    image:null,
    songs:[] 
  };
  imagePreviewSource:string | ArrayBuffer | null ='../../../assets/images/gray-color-solid-background-1920x1080.png';
  constructor(private albumService:AlbumService,
    private songService:SongService,
    private router:Router){
    
  }

  submitAlbum(){
    this.albumService.addAlbum(this.album).subscribe(res=>{
      this.album.songs!=null && 
      this.songService.addSongs(this.album.songs,this.album.name,res.id.toString())
      .subscribe()    
    }
      )
    this.router.navigate(['albums']); 
  }

  // get the file from the input 
  onSelectedFile(event:any){
    this.album.image=event.target.files[0];
    console.log(this.album.image);
    //this code is to show the image's preview
    const fileInput= event.target;
    const file = fileInput.files && fileInput.files[0];
    if(file){
      const reader= new FileReader();
      reader.onload=()=>{
        this.imagePreviewSource=reader.result;
      }
      reader.readAsDataURL(file);
    }
      
      
  }

  // add song to the songs array before creating the new album
  receiveSong($event:any){
    //$event.albumId=this.album.id;
    if($event)
    this.album.songs?.push($event); 
    else alert("Select a song's file!");   
  }

  removeExtension(songName:string):string{
    const index=songName.lastIndexOf(".");
    return index!=-1? songName.slice(0,index):songName;
  }
}
