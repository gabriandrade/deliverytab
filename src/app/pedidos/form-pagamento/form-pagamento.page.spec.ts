import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPagamentoPage } from './form-pagamento.page';

describe('FormPagamentoPage', () => {
  let component: FormPagamentoPage;
  let fixture: ComponentFixture<FormPagamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPagamentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPagamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
