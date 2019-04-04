import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryFormComponent } from './machinery-form.component';

describe('MachineryFormComponent', () => {
  let component: MachineryFormComponent;
  let fixture: ComponentFixture<MachineryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
