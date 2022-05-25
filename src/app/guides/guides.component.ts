import { Component, Input, OnInit } from '@angular/core';
import { IGuide } from './guide-card/guide-card.model';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.scss']
})
export class GuidesComponent implements OnInit {

  @Input() guides: IGuide[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
