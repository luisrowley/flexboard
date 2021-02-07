import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFlexboardComponent } from './ngx-flexboard.component';

describe('NgxFlexboardComponent', () => {
  let component: NgxFlexboardComponent;
  let fixture: ComponentFixture<NgxFlexboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFlexboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFlexboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
