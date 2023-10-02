import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundoStyleComponent } from './fundo-style.component';

describe('FundoStyleComponent', () => {
  let component: FundoStyleComponent;
  let fixture: ComponentFixture<FundoStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundoStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundoStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
