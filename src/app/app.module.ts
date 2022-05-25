import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { GuideCardComponent } from './guides/guide-card/guide-card.component';
import { GuidesService } from './services/guides.service';
import { GuidesComponent } from './guides/guides.component';
import { TruncatePipe } from './shared/truncate.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GuideCardComponent,
    GuidesComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [GuidesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
