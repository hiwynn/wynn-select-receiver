import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public actionSource = new BehaviorSubject<any>(null);
  action$ = this.actionSource.asObservable();

  displayLanguages;

  constructor() {
  }

  transmitAction(name, data) {
    this.actionSource.next({
      action: name,
      data: data
    });
  }

  getDefaultLanguages() {
    return {
      dialogTitle: '选择收信人',
      search: '搜索',
      cancelButton: '取消',
      OkButton: '确定',
      personTitle: '联系人',
      createPerson: '新建联系人',
      deletePerson: '删除联系人',
      personNameField: '备注',
      personValueField: '内容',
      groupTitle: '联系人组',
      createGroup: '新建联系人组',
      deleteGroup: '删除联系人组',
      groupNameFiled: '组名称',
      groupMemberFiled: '组成员',
      selectPersons: '选择组成员',
      repeatTip: '已存在'
    };
  }

  getDisplayLanguages(optionLanguages) {
    const defaultLanguages = this.getDefaultLanguages();
    const displayLanguages = optionLanguages ? _.cloneDeep(optionLanguages) : {};
    for (const key in defaultLanguages) {
      if (displayLanguages[key] === undefined) {
        displayLanguages[key] = defaultLanguages[key];
      }
    }
    this.displayLanguages = displayLanguages;
    return displayLanguages;
  }
}
