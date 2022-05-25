import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GuideCardComponent } from './guides/guide-card/guide-card.component';
import { GuidesService } from './services/guides.service';
import { GuidesComponent } from './guides/guides.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    GuideCardComponent,
    GuidesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule
  ],
  providers: [GuidesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
