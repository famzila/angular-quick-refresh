import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-guide-content',
  templateUrl: './guide-content.component.html',
  styleUrls: ['./guide-content.component.scss']
})
export class GuideContentComponent implements OnInit {
  contentTitle: string='';

  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.contentTitle = params['name'];
    });
  }

}
