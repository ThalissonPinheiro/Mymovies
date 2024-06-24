import { TestBed } from '@angular/core/testing';

import { APIMyMoviesService } from './api-my-movies.service';

describe('APIMyMoviesService', () => {
  let service: APIMyMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIMyMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
