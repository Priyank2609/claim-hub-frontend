import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeplSection } from './hepl-section';

describe('HeplSection', () => {
  let component: HeplSection;
  let fixture: ComponentFixture<HeplSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeplSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeplSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
