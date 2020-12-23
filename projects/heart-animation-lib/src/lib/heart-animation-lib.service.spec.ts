import { TestBed } from '@angular/core/testing';

import { HeartAnimationLibService } from './heart-animation-lib.service';

describe('HeartAnimationLibService', () => {
  let service: HeartAnimationLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeartAnimationLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
