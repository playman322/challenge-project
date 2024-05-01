import { TestBed } from '@angular/core/testing';
import { MessageBannerService } from './message-banner.service';
import { MessageService } from 'primeng/api';

describe('MessageBannerService', () => {
  let service: MessageBannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageBannerService, { provide: MessageService, useValue: {} }]
    });
    service = TestBed.inject(MessageBannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
