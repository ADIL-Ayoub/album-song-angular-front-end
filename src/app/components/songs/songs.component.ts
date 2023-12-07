import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Song } from 'src/app/models/Song';
import { SongService } from 'src/app/services/song/song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent {
  songs:Song[]=[];
  path:string='';
  isLoading:boolean=false;
  isPathChanging=false;

  constructor(private songService:SongService,
    private cdr:ChangeDetectorRef,
    ){
    this.getSongs();
  }
  
  getSongs(){
    this.songService.getSongs().subscribe(res=>{this.songs=res;
    console.log(this.songs);
    
    });
  }
  changePath(path:string){
    this.isPathChanging=true;
    this.path="../../../assets/music/"+ this.cleanPath(path);
    this.cdr.detectChanges();
    this.isPathChanging=false;
    console.log(this.path);
  }
  cleanPath(path:string):string{
    const newPath=path.slice(58);
    const index=newPath.indexOf('\\');
   return newPath.slice(0,index)+'/'+newPath.slice(index+1);
   }
   removeExtension(songName:string):string{
    const index=songName.lastIndexOf(".");
    return index!=-1? songName.slice(0,index):songName;
  }
}
