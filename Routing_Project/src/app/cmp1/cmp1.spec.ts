import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp1 } from './cmp1';

describe('Cmp1', () => {
  let component: Cmp1;
  let fixture: ComponentFixture<Cmp1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cmp1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
