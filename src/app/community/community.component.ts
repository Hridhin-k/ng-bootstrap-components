import { Component, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface Country {
  name: string;
  flag: string;
  area: number;
  Riders: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    Riders: 7012
  },
  {
    name: 'India',
    flag: '4/41/Flag_of_India.svg',
    area: 17075200,
    Riders: 1469
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    Riders: 3662
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    Riders: 3244
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    Riders: 1409
  },
  {
    name: 'Brazil',
    flag: '0/05/Flag_of_Brazil.svg',
    area: 9596960,
    Riders: 1456
  }, {
    name: 'UAE',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075,
    Riders: 1441
  },
  {
    name: 'Japan',
    flag: '4/41/Flag_of_India.svg',
    area: 1707,
    Riders: 1463
  },
  {
    name: 'Malasia',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 99761,
    Riders: 3662
  },
  {
    name: 'Mexico',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 96290,
    Riders: 3244
  },
  {
    name: 'Canada',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 950,
    Riders: 1409
  },
  {
    name: 'Germany',
    flag: '0/05/Flag_of_Brazil.svg',
    area: 9590,
    Riders: 3567
  },
];
function search(text: string, pipe: PipeTransform): Country[] {
  return COUNTRIES.filter(country => {
    const term = text.toLowerCase();
    return country.name.toLowerCase().includes(term)
      || pipe.transform(country.area).includes(term)
      || pipe.transform(country.Riders).includes(term);
  });
}


@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent {

  countries$: Observable<Country[]>;
  filter = new FormControl('', { nonNullable: true });

  constructor(pipe: DecimalPipe) {
    this.countries$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
  }
}
