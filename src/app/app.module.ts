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
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import { SongFormComponent } from './components/song-form/song-form.component';
import { SongService } from './services/song/song.service';
import { SongsComponent } from './components/songs/songs.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    HeaderComponent,
    AlbumFormComponent,
    AlbumDetailsComponent,
    SongFormComponent,
    SongsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule
  ],
  providers: [AlbumService,SongService],
  bootstrap: [AppComponent]
})
export class AppModule { }
