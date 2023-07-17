import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  selectedLanguage: any;
  languages = [
    { code: 'en', name: 'English', image: '../../assets/img/era.png' },
    { code: 'fr', name: 'French', image: '../../assets/img/era.png' },
    // Add more languages with their respective image URLs
  ];
  cities = [
    {
        id: 1,
        name: 'French',
        avatar: '../../../assets/svg/circle-flags_us.png'
    },
    {
        id: 3,
        name: 'German',
        avatar: '../../../assets/svg/circle-flags_us.png'
    },
    {
        id: 4,
        name: 'Arabian',
        avatar: '../../../assets/svg/circle-flags_us.png'
    },
];

selectedCity: string = this.cities[0].name; 
}
