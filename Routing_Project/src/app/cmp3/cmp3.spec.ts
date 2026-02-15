import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp3 } from './cmp3';

describe('Cmp3', () => {
  let component: Cmp3;
  let fixture: ComponentFixture<Cmp3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cmp3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
