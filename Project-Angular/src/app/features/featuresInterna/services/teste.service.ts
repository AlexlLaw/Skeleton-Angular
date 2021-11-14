import { Injectable } from '@angular/core';
import { ComponentEventHandler } from 'src/app/core/utils/event/component-event-handler';
import { TesteAction } from 'src/app/core/utils/event/testeAction';

@Injectable({
  providedIn: 'root'
})
export class TesteService extends ComponentEventHandler<TesteAction, any>  {

  constructor() {
    super();
   }
}
