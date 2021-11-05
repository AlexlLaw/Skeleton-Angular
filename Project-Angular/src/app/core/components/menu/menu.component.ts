import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

import { faCoffee, faAppleAlt, faAddressCard, faLaptopCode, faBars, faDoorClosed  } from '@fortawesome/free-solid-svg-icons';
import { TokenService } from '../../auth/token/token.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public selectdClass: boolean = false;
  public faLaptopCode = faLaptopCode;
  public faBars = faBars;

  public menu: Array<any> = [
    {
      id: '1',
      icon: faCoffee,
      title: 'cadastro',
      link: '/login',
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
    },
    {
      id: '4',
      icon: faCoffee,
      title: 'cadastro',
      class: ''
    },
    {
      id: '5',
      icon: faAppleAlt,
      title: 'listar',
      class: ''
    },
    {
      id: '6',
      icon: faDoorClosed,
      title: 'Logout',
      link: '/login',
      class: ''

    }
  ];

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
  }

  public addClass(id: number): void {
   this.menu.filter((el) => {
     if (id !== el.id) {
      return el.class = '';
     }
     el.class = 'hovered';
     this.chooseMenu(el.title);
   });
  }

  public toggleMenu(): boolean {
    if (this.selectdClass) {
      return this.selectdClass = false;
    }

    if (!this.selectdClass) {
      return this.selectdClass = true;
    }
  }

  public chooseMenu(title: string): void {
    const verify = {
     Logout: () => {
        this.tokenService.removeToken();
     }
    };

    const entrarFunction = verify[title];
    entrarFunction(title);
    return;
  }
}
