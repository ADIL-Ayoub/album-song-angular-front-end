import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from 'src/app/models/Song';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private baseURL:string="http://localhost:8222/SONG-SERVICE/api/v1/songs";
  private testURL:string="http://localhost:8222/SONG-SERVICE/test/real-songs";
  constructor(private http:HttpClient) { }

  addSongs(songs:any, albumName:string,albumId:string):Observable<any>{
    //return this.http.post(`${this.baseURL}/all`,songs);
    const formData:FormData= new FormData();
    formData.append("albumName",albumName);
    formData.append("albumId",albumId);
    for (const song of songs) {
      formData.append('songs', song);
    }    
    
    return this.http.post(`${this.baseURL}/all`,formData);
  }
  getSongs():Observable<Song[]>{
    return this.http.get<Song[]>(this.baseURL);
  }
  addRealSongs(songs:any, albumName:string,albumId:string):Observable<any>{
    const formData:FormData= new FormData();
    formData.append("albumName",albumName);
    formData.append("albumId",albumId);
    for (const song of songs) {
      formData.append('songs', song);
    }    
    
    return this.http.post(`${this.testURL}`,formData);
  }
}
