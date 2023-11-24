import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import { AlbumFormComponent } from './components/album-form/album-form.component';
import { AlbumsComponent } from './components/albums/albums.component';

const routes: Routes = [
  {
    path:"",
    component:AlbumsComponent 
  },{
    path:"albums",
    component:AlbumsComponent 
  },{
    path:"albums/form",
    component:AlbumFormComponent 
  },
  {
    path:"albums/:id",
    component:AlbumDetailsComponent 
  }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
