import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyUsePolicy } from './why-use-policy';

describe('WhyUsePolicy', () => {
  let component: WhyUsePolicy;
  let fixture: ComponentFixture<WhyUsePolicy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyUsePolicy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyUsePolicy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
