import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendPage } from './trend-page';

describe('TrendPage', () => {
  let component: TrendPage;
  let fixture: ComponentFixture<TrendPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
