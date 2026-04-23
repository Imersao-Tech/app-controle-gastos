import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gasto } from './gasto';

describe('Gasto', () => {
  let component: Gasto;
  let fixture: ComponentFixture<Gasto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gasto],
    }).compileComponents();

    fixture = TestBed.createComponent(Gasto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
