import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-list-photos',
  templateUrl: './list-photos.component.html',
  styleUrls: ['./list-photos.component.scss']
})
export class ListPhotosComponent {
  regularDistribution = 100 / 3;
  constructor(public dialog: MatDialog) {}
@Input() listPhotos:any[]=[];
@Output() deleteImgEmit= new EventEmitter;
  deleteImage(enterAnimationDuration: string, exitAnimationDuration: string,index:number): void {
  const dialogRef= this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
      this.deleteImgEmit.next(index);
      }
    });
  }

}


@Component({
  selector: 'dialog-animations-example-dialog',
  template: `<h1 mat-dialog-title>Delete Photo</h1>
  <div mat-dialog-content>
    Members with multiple photos get better response. Do you still want to delete this photo?
  </div>
  <div mat-dialog-actions>
    <button mat-button mat-dialog-close (click)="onNoClick()">Yes</button>
    <button mat-button mat-dialog-close>No</button>
  </div>
  `,
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
  onNoClick(): void {
    this.dialogRef.close(true);
  }
}
