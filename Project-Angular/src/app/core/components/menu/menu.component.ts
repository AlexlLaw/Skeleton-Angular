import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public selectdClass: boolean = false;
  public menu: Array<any> = [
    {
      id: '1',
      icon: '',
      title: 'cadastro',
      class: ''
    },
    {
      id: '2',
      icon: '',
      title: 'listar',
      class: ''
    },
    {
      id: '3',
      icon: '',
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
