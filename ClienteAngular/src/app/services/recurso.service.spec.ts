import { TestBed, inject } from '@angular/core/testing';

import { RecursoService } from './recurso.service';

describe('RecursoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecursoService]
    });
  });

  it('should ...', inject([RecursoService], (service: RecursoService) => {
    expect(service).toBeTruthy();
  }));
});
