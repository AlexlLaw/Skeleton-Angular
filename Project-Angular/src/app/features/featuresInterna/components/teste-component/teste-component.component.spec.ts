import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteComponentComponent } from './teste-component.component';

describe('TesteComponentComponent', () => {
  let component: TesteComponentComponent;
  let fixture: ComponentFixture<TesteComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
