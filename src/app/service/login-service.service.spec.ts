import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { LoginServiceService } from './login-service.service';

describe('LoginServiceService', () => {
  let service: LoginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
    });
    service = TestBed.inject(LoginServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
