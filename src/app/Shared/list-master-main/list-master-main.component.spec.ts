import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMasterMainComponent } from './list-master-main.component';

describe('ListMasterMainComponent', () => {
  let component: ListMasterMainComponent;
  let fixture: ComponentFixture<ListMasterMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMasterMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMasterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
