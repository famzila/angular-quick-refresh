import { Component, Input, OnInit } from '@angular/core';
import { IGuide } from '../guide-card/guide-card.model';

@Component({
  selector: 'app-guide-list',
  templateUrl: './guide-list.component.html',
  styleUrls: ['./guide-list.component.scss']
})
export class GuideListComponent implements OnInit {

  @Input() guides: IGuide[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
