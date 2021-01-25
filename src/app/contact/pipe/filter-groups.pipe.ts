import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterGroups'
})
export class FilterGroupPipe implements PipeTransform {

  transform(items: any[], searchText: string, display: string, value: string): any {
    searchText = searchText ? searchText.toLowerCase() : '';
    const newGroups = [];
    items.forEach(item => {
      if (item['members'].filter(member => {
        return member[display].toLowerCase().indexOf(searchText) != - 1
          || member[value].toLowerCase().indexOf(searchText) != - 1
      }).length || item['groupName'].toLowerCase().indexOf(searchText) != - 1) {
        newGroups.push(item);
      }
    })
    return newGroups;
  }

}
