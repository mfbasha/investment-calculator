import { TestBed } from '@angular/core/testing';

import { ExpensmanagerService } from './expensmanager.service';

describe('ExpensmanagerService', () => {
  let service: ExpensmanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpensmanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
