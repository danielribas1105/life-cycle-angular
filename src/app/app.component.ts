import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, DoCheck{
  title = 'app-lista-de-compras';
  listaCompras!: Array<Item>;
  itemParaSerEditado!: Item;

  constructor(
    private service: ListaDeCompraService
  ) { }

  ngOnInit(): void {
      this.listaCompras = this.service.getListaDeCompra();
  }

  ngDoCheck(): void {
      this.service.atualizarLocalStorage();
  }

  editarItem(item: Item) {
    this.itemParaSerEditado = item;
  }

  deletarItem(id: number) {
    const index = this.listaCompras.findIndex((item) => item.id === id);
    this.listaCompras.splice(index, 1);
  }

  limparLista() {
    this.listaCompras = [];
  }

}
