import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInitComponent } from './view-init.component';

describe('ViewInitComponent', () => {
  let component: ViewInitComponent;
  let fixture: ComponentFixture<ViewInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
