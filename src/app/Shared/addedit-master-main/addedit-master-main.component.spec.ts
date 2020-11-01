import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditMasterMainComponent } from './addedit-master-main.component';

describe('AddeditMasterMainComponent', () => {
  let component: AddeditMasterMainComponent;
  let fixture: ComponentFixture<AddeditMasterMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditMasterMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditMasterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
