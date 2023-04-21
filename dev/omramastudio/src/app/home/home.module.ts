import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { SharedModule } from '../shared/shared.module';
import { HomepageSectionComponent } from './homepage-section/homepage-section.component';



@NgModule({
  declarations: [
    HomepageComponent,
    HomepageSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomeModule { }
