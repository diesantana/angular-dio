import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindClassComponent } from './bind-class.component';

describe('BindClassComponent', () => {
  let component: BindClassComponent;
  let fixture: ComponentFixture<BindClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
