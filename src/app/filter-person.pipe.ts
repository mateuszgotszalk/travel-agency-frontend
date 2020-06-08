import { Pipe, PipeTransform } from '@angular/core';
import { PersonOutput } from './people/models/person-output';

@Pipe({
  name: 'filterPerson'
})
export class FilterPersonPipe implements PipeTransform {

  transform(value: PersonOutput[], searchText: string): PersonOutput[] {
    return value.filter(person => this.checkPerson(person, searchText));
  }

  checkPerson(person: PersonOutput, searchText: string): unknown {
    if (person.name.includes(searchText) ||
      person.surrName.includes(searchText) ||
      person.role.toString().includes(searchText) ||
      person.dateOfBirth.includes(searchText) ||
      searchText === undefined) {
      return true;
    } else {
      return false;
    }
  }

}
