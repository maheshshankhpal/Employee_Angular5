import { TestBed, async, inject } from '@angular/core/testing';

import { StateofpageGuard } from './stateofpage.guard';

describe('StateofpageGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StateofpageGuard]
    });
  });

  it('should ...', inject([StateofpageGuard], (guard: StateofpageGuard) => {
    expect(guard).toBeTruthy();
  }));
});
