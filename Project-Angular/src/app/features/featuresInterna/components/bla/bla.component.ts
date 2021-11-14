import { Component, OnInit } from '@angular/core';
import { SignUp } from 'src/app/core/models/sign-up';
import { TesteAction } from 'src/app/core/utils/event/testeAction';
import { TesteService } from '../../services/teste.service';

@Component({
  selector: 'app-bla',
  templateUrl: './bla.component.html',
  styleUrls: ['./bla.component.css']
})
export class BlaComponent implements OnInit {
  constructor(private testService: TesteService) { }

  ngOnInit(): void {
  }

  public dispatch(){
    this.testService.dispatchAction({action: TesteAction.DETAIL, data: 'dasdasdasdasdasd'});
  }
}
