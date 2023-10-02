import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjChangesComponent } from './obj-changes.component';

describe('ObjChangesComponent', () => {
  let component: ObjChangesComponent;
  let fixture: ComponentFixture<ObjChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjChangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
