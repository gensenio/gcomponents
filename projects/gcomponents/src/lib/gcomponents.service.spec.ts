import { TestBed } from '@angular/core/testing';

import { GcomponentsService } from './gcomponents.service';

describe('GcomponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GcomponentsService = TestBed.get(GcomponentsService);
    expect(service).toBeTruthy();
  });
});
