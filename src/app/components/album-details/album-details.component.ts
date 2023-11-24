import { Component } from '@angular/core';
import { Album } from 'src/app/models/Album';
import { AlbumService } from 'src/app/services/album/album.service';
import { ActivatedRoute } from '@angular/router';

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
    songs:[] 
  };

  constructor(private albumService: AlbumService, private route: ActivatedRoute){
    this.id=Number(route.snapshot.params['id']);
    this.getAlbumWithSongs(this.id);
    console.log(this.album);
  }
  getAlbumWithSongs(id:number){
    return this.albumService.getAlbum(id).subscribe(res=>this.album=res);
  }

}
