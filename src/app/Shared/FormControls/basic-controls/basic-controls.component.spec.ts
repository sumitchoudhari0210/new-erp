import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicControlsComponent } from './basic-controls.component';

describe('BasicControlsComponent', () => {
  let component: BasicControlsComponent;
  let fixture: ComponentFixture<BasicControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
