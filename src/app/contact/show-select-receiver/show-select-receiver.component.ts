import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ContactService } from '../contact.service';
import { SelectReceiverComponent } from '../select-receiver/select-receiver.component';

@Component({
  selector: 'app-show-select-receiver',
  templateUrl: './show-select-receiver.component.html',
  styleUrls: ['./show-select-receiver.component.css']
})
export class ShowSelectReceiverComponent implements OnInit {

  @Output() done = new EventEmitter();
  @Output() personCreated = new EventEmitter();
  @Output() personUpdated = new EventEmitter();
  @Output() personDeleted = new EventEmitter();
  @Output() groupUpdated = new EventEmitter();
  @Output() groupCreated = new EventEmitter();
  @Output() groupDeleted = new EventEmitter();
  @Input() options;
  @Input() contacts;
  @Input() groups;
  actionSub: Subscription;

  constructor(public dialog: MatDialog,
              private service: ContactService,) {
  }

  ngOnInit(): void {
    this.selectReceiver();
    this.actionSub = this.service.action$.subscribe(result => {
      if (result && result.action === 'personCreated') {
        this.personCreated.next(result.data);
      }
      if (result && result.action === 'personUpdated') {
        this.personUpdated.next(result.data);
      }
      if (result && result.action === 'personDeleted') {
        this.personDeleted.next(result.data);
      }
      if (result && result.action === 'groupUpdated') {
        this.groupUpdated.next(result.data);
      }
      if (result && result.action === 'groupCreated') {
        this.groupCreated.next(result.data);
      }
      if (result && result.action === 'groupDeleted') {
        this.groupDeleted.next(result.data);
      }
    });
  }

  selectReceiver() {
    const dialogRef = this.dialog.open(SelectReceiverComponent, {
      data: {
        options: this.options ? JSON.parse(this.options) : {},
        contacts: this.contacts ? JSON.parse(this.contacts) : [],
        contactGroups: this.groups ? JSON.parse(this.groups) : [],
      },
      panelClass: this.options ? JSON.parse(this.options).panelClass : '',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.done.next(result);
    });
  }

  ngOnDestroy() {
    if (this.actionSub) {
      this.actionSub.unsubscribe();
    }
  }
}
