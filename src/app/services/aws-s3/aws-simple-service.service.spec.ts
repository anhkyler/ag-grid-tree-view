import { TestBed } from '@angular/core/testing';

import { AwsSimpleServiceService } from './aws-simple-service.service';

describe('AwsSimpleServiceService', () => {
  let service: AwsSimpleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwsSimpleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
