import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormItemPedidoPage } from './form-item-pedido.page';

describe('FormItemPedidoPage', () => {
  let component: FormItemPedidoPage;
  let fixture: ComponentFixture<FormItemPedidoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormItemPedidoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormItemPedidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
