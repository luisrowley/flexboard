import { TestBed } from '@angular/core/testing';

import { NgxFlexboardService } from './ngx-flexboard.service';

describe('NgxFlexboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxFlexboardService = TestBed.get(NgxFlexboardService);
    expect(service).toBeTruthy();
  });
});
