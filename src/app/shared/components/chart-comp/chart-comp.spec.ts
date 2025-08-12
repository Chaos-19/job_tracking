import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartComp } from './chart-comp';

describe('ChartComp', () => {
  let component: ChartComp;
  let fixture: ComponentFixture<ChartComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
