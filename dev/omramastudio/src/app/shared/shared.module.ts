import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosliderComponent } from './photoslider/photoslider.component';
import { PagesectionComponent } from './pagesection/pagesection.component';



@NgModule({
  declarations: [
    PhotosliderComponent,
    PagesectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PhotosliderComponent
  ]
})
export class SharedModule { }
