import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDefaultComponent } from './chart-default.component';

describe('ChartDefaultComponent', () => {
  let component: ChartDefaultComponent;
  let fixture: ComponentFixture<ChartDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
