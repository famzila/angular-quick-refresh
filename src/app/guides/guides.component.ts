import { Component, OnInit } from '@angular/core';
import { GuidesService } from '../services/guides.service';
import { IGuide } from './guide-card/guide-card.model';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.scss']
})
export class GuidesComponent implements OnInit {
  guides: IGuide[]= [];

  constructor( private guidesService: GuidesService ){

  }

  ngOnInit(): void {
    this.guides= this.guidesService.getCourses();
  }

}
