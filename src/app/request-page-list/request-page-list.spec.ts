import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPageList } from './request-page-list';

describe('RequestPageList', () => {
  let component: RequestPageList;
  let fixture: ComponentFixture<RequestPageList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestPageList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestPageList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
