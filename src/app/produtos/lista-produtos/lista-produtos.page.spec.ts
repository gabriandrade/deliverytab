import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProdutosPage } from './lista-produtos.page';

describe('ListaProdutosPage', () => {
  let component: ListaProdutosPage;
  let fixture: ComponentFixture<ListaProdutosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProdutosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProdutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
