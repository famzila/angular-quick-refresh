import { Component, Input, OnInit } from '@angular/core';
import { IGuide } from './guide-card.model';

@Component({
  selector: 'app-guide-card',
  templateUrl: './guide-card.component.html',
  styleUrls: ['./guide-card.component.scss']
})
export class GuideCardComponent implements OnInit {

  longText = `Angular modules`;
  @Input() guide!: IGuide;

  constructor() { }

  ngOnInit(): void {
  }

}
