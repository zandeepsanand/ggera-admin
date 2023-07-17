import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-blue',
  templateUrl: './navbar-blue.component.html',
  styleUrls: ['./navbar-blue.component.scss']
})
export class NavbarBlueComponent implements OnInit{
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
ngOnInit() {
}
}
