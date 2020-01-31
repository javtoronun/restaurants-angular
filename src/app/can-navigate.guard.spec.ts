import { TestBed, async, inject } from '@angular/core/testing';

import { CanNavigateGuard } from './can-navigate.guard';

describe('CanNavigateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanNavigateGuard]
    });
  });

  it('should ...', inject([CanNavigateGuard], (guard: CanNavigateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
