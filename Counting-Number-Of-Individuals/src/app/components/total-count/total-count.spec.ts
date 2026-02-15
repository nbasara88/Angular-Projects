import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCount } from './total-count';

describe('TotalCount', () => {
  let component: TotalCount;
  let fixture: ComponentFixture<TotalCount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalCount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalCount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
