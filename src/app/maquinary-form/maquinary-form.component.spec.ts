import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinaryFormComponent } from './maquinary-form.component';

describe('MaquinaryFormComponent', () => {
  let component: MaquinaryFormComponent;
  let fixture: ComponentFixture<MaquinaryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaquinaryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquinaryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
