import { Component, OnInit } from '@angular/core';

import { faCoffee, faAppleAlt, faAddressCard, faLaptopCode  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public selectdClass: boolean = false;
  public faLaptopCode = faLaptopCode;

  public menu: Array<any> = [
    {
      id: '1',
      icon: faCoffee,
      title: 'cadastro',
      class: ''
    },
    {
      id: '2',
      icon: faAppleAlt,
      title: 'listar',
      class: ''
    },
    {
      id: '3',
      icon: faAddressCard,
      title: 'editar',
      class: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public addClass(id: number): void {
   this.menu.filter((el) => {
     if(id != el.id) {
     return el.class = '';
     }
     el.class = 'hovered';
   });
  }
}
