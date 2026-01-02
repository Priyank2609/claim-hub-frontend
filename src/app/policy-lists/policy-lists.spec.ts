import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyLists } from './policy-lists';

describe('PolicyLists', () => {
  let component: PolicyLists;
  let fixture: ComponentFixture<PolicyLists>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyLists]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyLists);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
