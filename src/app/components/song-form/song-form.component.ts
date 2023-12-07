import { Component ,Output,EventEmitter } from '@angular/core';
import { Song } from 'src/app/models/Song';
@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.css']
})
export class SongFormComponent {

  realSong:any=null;
  @Output() songEmitter:EventEmitter<any>=new EventEmitter<any>();

  onSelectedFile(event:any){
    this.realSong=event.target.files[0];
    console.log(this.realSong);
    
  }
  addRealSong(){
    this.songEmitter.emit(this.realSong);
    this.realSong=null;
  }


}
