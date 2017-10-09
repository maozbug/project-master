import { TestBed, inject } from '@angular/core/testing';

import { ShowLeftService } from './show-left.service';

describe('ShowLeftService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowLeftService]
    });
  });

  it('should be created', inject([ShowLeftService], (service: ShowLeftService) => {
    expect(service).toBeTruthy();
  }));
});
