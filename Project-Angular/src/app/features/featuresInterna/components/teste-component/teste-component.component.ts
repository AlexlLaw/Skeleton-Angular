import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SignUp } from 'src/app/core/models/sign-up';
import { ComponentEvent } from 'src/app/core/utils/event/component.event';
import { TesteAction } from 'src/app/core/utils/event/testeAction';
import { TesteService } from '../../services/teste.service';

@Component({
  selector: 'app-teste-component',
  templateUrl: './teste-component.component.html',
  styleUrls: ['./teste-component.component.css']
})
export class TesteComponentComponent implements OnInit {

  private subscription: Subscription = new Subscription();

  constructor(private testService: TesteService) { }

  ngOnInit(): void {
    this.subscription.add(this.testService.onEvent()
    .pipe(
      tap((event: any) => {
        this.childCOmponentActionReducer(event);
      })
    )
    .subscribe());
  }

  public childCOmponentActionReducer(event:ComponentEvent<TesteAction, any>): void {
    switch(event.action) {
      case TesteAction.DETAIL:
        console.log('chegou');
        console.log(event);
        //conteudo a ser passado ou chamado;
    }
  }
}
