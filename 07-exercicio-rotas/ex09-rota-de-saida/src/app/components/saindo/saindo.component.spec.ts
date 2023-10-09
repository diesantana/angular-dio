import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaindoComponent } from './saindo.component';

describe('SaindoComponent', () => {
  let component: SaindoComponent;
  let fixture: ComponentFixture<SaindoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaindoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaindoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
