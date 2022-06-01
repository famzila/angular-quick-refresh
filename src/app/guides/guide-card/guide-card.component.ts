import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IGuide } from './guide-card.model';

@Component({
  selector: 'app-guide-card',
  templateUrl: './guide-card.component.html',
  styleUrls: ['./guide-card.component.scss']
})
export class GuideCardComponent implements OnInit {

  longText = `Angular modules`;
  @Input() guide!: IGuide;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


@Component({
  selector: 'dialog-content-example-dialog',
  template: `<h1 mat-dialog-title>COMMING SOON ...</h1>
  <div mat-dialog-content><h3>We are currently working on the content!</h3></div>`,
})
export class DialogContentExampleDialog {}