import { TestBed } from '@angular/core/testing';

import { ClicksService } from './clicks.service';

describe('ClicksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClicksService = TestBed.get(ClicksService);
    expect(service).toBeTruthy();
  });
});
