import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { FoosterComponent } from './fooster/fooster.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    FoosterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
