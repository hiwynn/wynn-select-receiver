import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {

  transform(items: any[], searchText: string, display: string, value: string): any {
    searchText = searchText ? searchText.toLowerCase() : '';
    return items.filter(item => {
      return item[display].toLowerCase().indexOf(searchText) != - 1
        || item[value].toLowerCase().indexOf(searchText) != - 1
    });
  }

}
