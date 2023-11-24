import { Component } from '@angular/core';
import { Song } from 'src/app/models/Song';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent {
  song:Song={id:0,
    name:'',
    views: 0,
    duration:''
  }

}
