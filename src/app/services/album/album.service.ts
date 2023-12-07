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
  addAlbum(album:Album):Observable<Album>{
    const formData:FormData= new FormData();
    formData.append('name',album.name);
    formData.append('views',album.views.toString());
    formData.append('image',album.image);
    
    return this.http.post<Album>(this.baseURL,formData);
  }
  deleteAlbum(id:number):Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }
  getAlbum(id:number):Observable<Album>{
    return this.http.get<Album>(`${this.baseURL}/with-songs/${id}`);
  }
  getAlbumsByFilter(filterName:string):Observable<Album[]>{
    return this.http.get<Album[]>(`${this.baseURL}/filter?filterName=${filterName}`);
  }
}
