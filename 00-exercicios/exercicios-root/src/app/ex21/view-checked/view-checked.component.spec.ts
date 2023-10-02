import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCheckedComponent } from './view-checked.component';

describe('ViewCheckedComponent', () => {
  let component: ViewCheckedComponent;
  let fixture: ComponentFixture<ViewCheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCheckedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
