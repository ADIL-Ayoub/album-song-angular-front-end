import { Component } from '@angular/core';
import { AlbumService } from 'src/app/services/album/album.service';
import {faMusic}  from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  filterName:string='';
  musicIcon=faMusic;
  constructor(private albumService:AlbumService){

  }
  search(){
    this.albumService.getAlbumsByFilter(this.filterName).subscribe(res=>console.log(res)
    );
  }

}
