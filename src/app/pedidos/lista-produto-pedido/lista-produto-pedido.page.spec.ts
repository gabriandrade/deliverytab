import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProdutoPedidoPage } from './lista-produto-pedido.page';

describe('ListaProdutoPedidoPage', () => {
  let component: ListaProdutoPedidoPage;
  let fixture: ComponentFixture<ListaProdutoPedidoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProdutoPedidoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProdutoPedidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
