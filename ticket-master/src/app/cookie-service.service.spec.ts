import { TestBed } from '@angular/core/testing';

import { CookieServiceService } from './cookie-service.service';

describe('CookieServiceService', () => {
  let service: CookieServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookieServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    const cookievalue = 'Hey there, i hope you are enjoying this article';
    this.cookieValue = this.cookieService.get('cookie-name');
  });
});
