import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import * as _ from 'lodash';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactService } from '../contact.service';

let PRIMARY_KEY: string;

@Component({
  selector: 'app-edit-group-dialog',
  templateUrl: './edit-group-dialog.component.html',
  styleUrls: ['./edit-group-dialog.component.scss']
})
export class EditGroupDialogComponent implements OnInit {

  options;
  currentGroup;
  searchText: string;
  contacts: any[];
  originMembers: any[];
  displayLanguages;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
              public dialog: MatDialog,
              public dialogRef: MatDialogRef<EditGroupDialogComponent>,
              private service: ContactService,
              private _snackBar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    PRIMARY_KEY = this.data.options.primaryKey;
    this.options = this.data.options;
    this.contacts = _.cloneDeep(this.data.contacts);
    this.currentGroup = this.data.group ? _.cloneDeep(this.data.group) : {
      groupName: '',
      members: [],
    };
    this.originMembers = _.cloneDeep(this.currentGroup.members);
    this.checkContactList(this.currentGroup.members);
    this.displayLanguages = this.service.displayLanguages;
  }

  checkRepeat() {
    let repeat = false;
    if (this.data.groups.find(item => {
      return item['groupName'] === this.currentGroup.groupName;
    })) {
      repeat = true;
    }
    if (this.data.group && this.currentGroup.groupName === this.data.group['groupName']) {
      repeat = false;
    }
    return repeat;
  }

  checkContactList(groupMembers) {
    groupMembers.forEach(member => {
      this.contacts.forEach(person => {
        if (member[PRIMARY_KEY] === person[PRIMARY_KEY]) {
          person.exist = true;
        }
      });
    });
  }

  trackByFn(index, item) {
    return item[PRIMARY_KEY];
  }

  removeFromGroup(person) {
    person.exist = false;
    this.changePersonInList(person);
    const personInList = this.contacts.find(item => {
      return item[PRIMARY_KEY] === person[PRIMARY_KEY];
    });
    if (personInList) {
      personInList.exist = false;
    }
  }

  changePersonInList(person) {
    if (person.exist) {
      const member = _.cloneDeep(person);
      delete member.exist;
      this.currentGroup.members.push(person);
      this.originMembers.push(person);
    } else {
      _.remove(this.currentGroup.members, member => {
        return member[PRIMARY_KEY] === person[PRIMARY_KEY];
      });
      _.remove(this.originMembers, member => {
        return member[PRIMARY_KEY] === person[PRIMARY_KEY];
      });
    }
  }

  searchChange(searchText) {
    searchText = searchText ? searchText.toLowerCase() : '';
    this.currentGroup.members = this.originMembers.filter(item => {
      return item[this.options.display].toLowerCase().indexOf(searchText) != - 1
        || item[this.options.valueKey].toLowerCase().indexOf(searchText) != - 1;
    });
  }

  clearSearch() {
    this.searchText = '';
    this.searchChange('');
  }

  delete() {
    this.dialog.open(AlertDialogComponent, {
      data: {
        'title': '删除联系人组',
        'description': '你确定删除此联系人组吗？'
      }
    }).afterClosed().subscribe(result => {
      if (result) {
        _.remove(this.data.groups, item => {
          return item[this.options.groupPrimaryKey] === this.data.group[this.options.groupPrimaryKey];
        });

        this.service.transmitAction('groupDeleted', this.data.group);

        this.dialogRef.close();
        const message = '联系人组 ' + this.data.group['groupName'] + ' 删除成功！';
        this._snackBar.open(message, null, {duration: 2000});
      }
    });
  }

  done() {
    this.dialogRef.close(this.currentGroup);
  }

}
