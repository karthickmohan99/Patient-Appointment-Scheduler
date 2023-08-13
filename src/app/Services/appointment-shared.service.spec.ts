import { TestBed } from '@angular/core/testing';

import { AppointmentSharedService } from './appointment-shared.service';

describe('AppointmentSharedService', () => {
  let service: AppointmentSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
