import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tableOfContentHighLevel } from 'src/app/data/guides.data';
import { Content } from '../guide-card/guide-card.model';

// import * as template from "./assets/templates/heigh-level.template.html";

@Component({
  selector: 'app-guide-content',
  templateUrl: './guide-content.component.html',
  styleUrls: ['./guide-content.component.scss']
})
export class GuideContentComponent implements OnInit {
  contentTitle: string='';
  tableContent: Array<Content> = [];


  
  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    
    this.route.params.subscribe( params => {
      this.contentTitle = params['name'];
    });
    this.tableContent = tableOfContentHighLevel;

  }


}
