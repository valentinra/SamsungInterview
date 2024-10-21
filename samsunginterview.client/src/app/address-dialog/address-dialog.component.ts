import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  address: string;
}

@Component({
  selector: 'address-dialog',
  templateUrl: 'address-dialog.component.html',
})
export class AddressDialog {

  constructor(
    public dialogRef: MatDialogRef<AddressDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
