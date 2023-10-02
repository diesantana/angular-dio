import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuComponent } from './meu.component';

describe('MeuComponent', () => {
  let component: MeuComponent;
  let fixture: ComponentFixture<MeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
