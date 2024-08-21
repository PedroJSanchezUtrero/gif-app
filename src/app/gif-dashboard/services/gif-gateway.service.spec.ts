import { TestBed } from '@angular/core/testing';

import { GifGatewayService } from './gif-gateway.service';

describe('GifGatewayService', () => {
  let service: GifGatewayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GifGatewayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
