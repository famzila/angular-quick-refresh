import { Component, Input, OnInit } from '@angular/core';
import { Content } from 'src/app/guides/guide-card/guide-card.model';


@Component({
  selector: 'table-of-content',
  templateUrl: './table-of-content.component.html',
  styleUrls: ['./table-of-content.component.scss']
})
export class TableOfContentComponent implements OnInit {
  @Input() contentList: Array<Content> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
