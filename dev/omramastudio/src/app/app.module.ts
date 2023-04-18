import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstacardComponent } from './instacard/instacard.component';
import { YoutubecardComponent } from './youtubecard/youtubecard.component';
import { SocialbarComponent } from './socialbar/socialbar.component';
import { InstaIconComponent } from './insta-icon/insta-icon.component';
import { FbIconComponent } from './fb-icon/fb-icon.component';
import { YtIconComponent } from './yt-icon/yt-icon.component';
import { MenubarComponent } from './menubar/menubar.component';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { TestimonycardComponent } from './testimonycard/testimonycard.component';
import { TestimonybarComponent } from './testimonybar/testimonybar.component';
import { ContactcardComponent } from './contactcard/contactcard.component';
import { TitlecardHeaderComponent } from './titlecard-header/titlecard-header.component';
import { TitlecardFooterComponent } from './titlecard-footer/titlecard-footer.component';
import { PhotocardFullsizeComponent } from './photocard-fullsize/photocard-fullsize.component';
import { PhotocardThumbnailComponent } from './photocard-thumbnail/photocard-thumbnail.component';
import { PhotocardBackgroundComponent } from './photocard-background/photocard-background.component';
import { PhotocardMidComponent } from './photocard-mid/photocard-mid.component';

@NgModule({
  declarations: [
    AppComponent,
    InstacardComponent,
    YoutubecardComponent,
    SocialbarComponent,
    InstaIconComponent,
    FbIconComponent,
    YtIconComponent,
    MenubarComponent,
    MenuitemComponent,
    TestimonycardComponent,
    TestimonybarComponent,
    ContactcardComponent,
    TitlecardHeaderComponent,
    TitlecardFooterComponent,
    PhotocardFullsizeComponent,
    PhotocardThumbnailComponent,
    PhotocardBackgroundComponent,
    PhotocardMidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
