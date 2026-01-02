import { TestBed } from '@angular/core/testing';
import { Quotes } from './quote';


describe('Quote', () => {
  let service: Quotes;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Quotes);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
