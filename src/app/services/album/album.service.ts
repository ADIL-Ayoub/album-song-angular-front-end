import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from 'src/app/models/Album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  baseURL:string="http://localhost:8222/ALBUM-SERVICE/api/v1/albums";
  constructor(private http:HttpClient) { 

  }
  getAlbums():Observable<Album[]>{
    return this.http.get<Album[]>(this.baseURL);
  }
  addAlbum(album:Album){
    return this.http.post(this.baseURL,album);
  }
  deleteAlbum(id:number):Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }
  getAlbum(id:number):Observable<Album>{
    return this.http.get<Album>(`${this.baseURL}/with-songs/${id}`);
  }
}
