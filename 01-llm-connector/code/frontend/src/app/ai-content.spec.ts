import { TestBed } from '@angular/core/testing';
import { AiContentService } from './ai-content';
import { provideHttpClient } from '@angular/common/http';

describe('Person', () => {
  let service: AiContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        AiContentService,
      ],
    });
    service = TestBed.inject(AiContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
