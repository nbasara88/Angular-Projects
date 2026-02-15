import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp2 } from './cmp2';

describe('Cmp2', () => {
  let component: Cmp2;
  let fixture: ComponentFixture<Cmp2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cmp2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
