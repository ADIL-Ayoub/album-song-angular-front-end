import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { HeaderComponent } from './components/header/header.component';
import { AlbumService } from './services/album/album.service';
import { AlbumFormComponent } from './components/album-form/album-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SongComponent } from './components/song/song.component';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    HeaderComponent,
    AlbumFormComponent,
    SongComponent,
    AlbumDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
