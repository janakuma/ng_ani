import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

import { MessageService } from './message.service';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    AppComponent,    
    HeroListComponent,
    HeroDetailComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
  	HeroService,
    MessageService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
