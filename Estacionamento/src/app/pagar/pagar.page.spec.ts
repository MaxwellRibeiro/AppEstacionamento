import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagarPage } from './pagar.page';

describe('PagarPage', () => {
  let component: PagarPage;
  let fixture: ComponentFixture<PagarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
