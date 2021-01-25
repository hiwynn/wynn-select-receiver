import { Component, OnInit, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ShowSelectReceiverComponent } from '../contact/show-select-receiver/show-select-receiver.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  contacts: any[];
  contactGroups: any[];
  options;

  constructor(injector: Injector) {
    const SelectReceiverElement = createCustomElement(ShowSelectReceiverComponent, {injector});
    customElements.define('ng-select-receiver', SelectReceiverElement);
  }

  ngOnInit(): void {
    this.mockData();
    var popupEl = document.createElement('ng-select-receiver');
    popupEl.setAttribute('options', JSON.stringify(this.options));
    popupEl.setAttribute('contacts', JSON.stringify(this.contacts));
    popupEl.setAttribute('groups', JSON.stringify(this.contactGroups));
    document.body.appendChild(popupEl);

    popupEl.addEventListener('done', (receivers) => {
      console.log(receivers);
      document.body.removeChild(popupEl)
    });

    popupEl.addEventListener('personCreated', (receivers) => {
      console.log(receivers);
    });

    popupEl.addEventListener('personUpdated', (receivers) => {
      console.log(receivers);
    });

    popupEl.addEventListener('personDeleted', (receivers) => {
      console.log(receivers);
    });

    popupEl.addEventListener('groupUpdated', (receivers) => {
      console.log(receivers);
    });

    popupEl.addEventListener('groupCreated', (receivers) => {
      console.log(receivers);
    });

    popupEl.addEventListener('groupDeleted', (receivers) => {
      console.log(receivers);
    });
  }

  mockData() {
    this.options = {
      type: 'email', // email, phone, QQ
      primaryKey: 'id',
      display: 'name', // 显示 字段
      valueKey: 'email', // email, phone, QQ 的值
      groupPrimaryKey: 'groupId',
      panelClass: 'contact-wrap',
      languages: {
        dialogTitle: '选择收信人1',
        search: '搜索1',
        cancelButton: '取消',
        OkButton: '确定',
        personTitle: '联系人',
        createPerson: '新建联系人',
        deletePerson: '删除联系人',
        personNameField: '备注',
        personValueField: '邮箱地址',
        groupTitle: '联系人组',
        createGroup: '新建联系人组',
        deleteGroup: '删除联系人组',
        groupNameFiled: '组名称',
        groupMemberFiled: '组成员',
        selectPersons: '选择组成员',
        repeatTip: '已存在'
      }
    };
    this.contacts = [
      {id: 1, name: 'Grace Johnson', email: 'grace@gmail.com', selected: false},
      {id: 2, name: 'John Rodriguez', email: 'john@shineteachchina.com', selected: false},
      {id: 3, name: 'Frank Brown', email: 'frank@qq.com', selected: false},
      {id: 4, name: 'Tina Johnson', email: 'tina@foxmail.com', selected: false},
      {id: 5, name: 'Mike Brown', email: 'mike@gmail.com', selected: false},
      {id: 6, name: 'Sunshine Wilson', email: 'sunshine@shineteachchina.com', selected: false},
      {id: 7, name: 'Jerry Johnson', email: 'jerry@gmail.com', selected: false},
      {id: 8, name: 'Coco Wilson', email: 'coco@shineteachchina.com', selected: false},
      {id: 9, name: 'Alice Rodriguez', email: 'alice@gmail.com', selected: false},
      {id: 10, name: 'Elsa Brown', email: 'elsa@foxmail.com', selected: false},
      {id: 11, name: 'Emily Johnson', email: 'emily@gmail.com', selected: false},
      {id: 12, name: 'Apple Rodriguez', email: 'apple@gmail.com', selected: false},
      {id: 13, name: 'Orange Johnson', email: 'orange@shineteachchina.com', selected: false},
      {id: 14, name: 'Banana Brown', email: 'banana@qq.com', selected: false},
    ];
    this.contactGroups = [
      {
        groupName: 'colleague',
        groupId: 1,
        selected: false,
        members: [
          {id: 2, name: 'John Rodriguez', email: 'john@shineteachchina.com', selected: false},
          {id: 3, name: 'Frank Brown', email: 'frank@qq.com', selected: false},
          {id: 4, name: 'Tina Johnson', email: 'tina@foxmail.com', selected: false},
        ]
      },
      {
        groupName: 'friend',
        groupId: 2,
        selected: false,
        members: [
          {id: 4, name: 'Tina Johnson', email: 'tina@foxmail.com', selected: false},
          {id: 5, name: 'Mike Wilson', email: 'mike@gmail.com', selected: false},
        ]
      },
      {
        groupName: 'family',
        groupId: 3,
        selected: false,
        members: [
          {id: 8, name: 'Coco Rodriguez', email: 'coco@shineteachchina.com', selected: false},
          {id: 9, name: 'Alice Wilson', email: 'alice@gmail.com', selected: false},
          {id: 10, name: 'Elsa Johnson', email: 'elsa@foxmail.com', selected: false},
          {id: 11, name: 'Emily Brown', email: 'emily@gmail.com', selected: false},
        ]
      },
    ];
  }

}
