import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private _loaderSubject: Subject<any>;
  public loaderState: any;

  constructor() {
    this._loaderSubject = new Subject();
    this.loaderState = this._loaderSubject.asObservable();
   }

    /**
     * [title] título que será exibido na parte superior
     * [message] mensagem que será exibida dentro do modal, pode ser passada "string" ou "HTML".
     * tipo de alerta || success || danger || warning || info
     * [fun] função que será chamada após o encerramento do modal
     * [size] tamanho do modal || sm || lg
     * AlertService
     */
   public openModal(title?: string, message?: string | HTMLElement, style?: string, size?: string): void {
    this._loaderSubject.next({
        show: true,
        title: title,
        body: message,
        style: style,
        size: size
    });
  }
}
