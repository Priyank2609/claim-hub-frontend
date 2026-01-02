import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPolicy } from './assign-policy';

describe('AssignPolicy', () => {
  let component: AssignPolicy;
  let fixture: ComponentFixture<AssignPolicy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignPolicy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignPolicy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
