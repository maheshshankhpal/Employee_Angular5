/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GenerateButtonService } from './GenerateButton.service';

describe('Service: GenerateButton', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenerateButtonService]
    });
  });

  it('should ...', inject([GenerateButtonService], (service: GenerateButtonService) => {
    expect(service).toBeTruthy();
  }));
});
