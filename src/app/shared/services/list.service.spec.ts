import { TestBed } from '@angular/core/testing';

import { ListService } from './list.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe('ListService', () => {
  let service: ListService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ListService]
    });
    service = TestBed.inject(ListService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
