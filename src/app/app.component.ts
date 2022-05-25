import { Component, OnInit } from '@angular/core';
import { IGuide } from './guides/guide-card/guide-card.model';
import { GuidesService } from './services/guides.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Angular Quick Refresh';

  constructor(){

  }

  ngOnInit(): void {
  }
}
