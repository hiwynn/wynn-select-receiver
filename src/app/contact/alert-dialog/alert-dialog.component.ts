import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent implements OnInit {
  displayLanguages;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private service: ContactService,
  ) {
  }

  ngOnInit(): void {
    this.displayLanguages = this.service.displayLanguages;
  }

}
