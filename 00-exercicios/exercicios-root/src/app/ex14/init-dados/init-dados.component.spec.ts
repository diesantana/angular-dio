import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitDadosComponent } from './init-dados.component';

describe('InitDadosComponent', () => {
  let component: InitDadosComponent;
  let fixture: ComponentFixture<InitDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitDadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
