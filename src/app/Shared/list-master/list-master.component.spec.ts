import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMasterComponent } from './list-master.component';

describe('ListMasterComponent', () => {
  let component: ListMasterComponent;
  let fixture: ComponentFixture<ListMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
