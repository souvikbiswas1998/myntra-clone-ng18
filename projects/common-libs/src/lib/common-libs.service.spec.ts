import { TestBed } from '@angular/core/testing';

import { CommonLibsService } from './common-libs.service';

describe('CommonLibsService', () => {
  let service: CommonLibsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonLibsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
