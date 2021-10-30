import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public selectdMenu: boolean;
  @ViewChild('active') active: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  public select(): void {
    const hamBigIsActive = this.active.nativeElement.classList.contains('hovered');

    if(hamBigIsActive) {
      this.renderer.removeClass(this.active.nativeElement, 'is-active');
     } else {
       this.renderer.addClass(this.active.nativeElement, 'is-active');
     }
  }

  bla(): void {
    console.log('passei por aqui');
  }

}
