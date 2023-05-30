import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[] = []

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]');
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  criarItem(nomeItem: string) {
    const id = this.listaDeCompra.length + 1;
    const item: Item = {
      id: id,
      nome: nomeItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false
    }
    return item;
  }

  editarItemNaLista(itemAnterior: Item, nomeEditadoDoItem: string) {
    const itemEditado: Item = {
      id: itemAnterior.id,
      nome: nomeEditadoDoItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: itemAnterior.comprado
    }
    const id = itemAnterior.id;
    this.listaDeCompra.splice(Number(id)-1, 1, itemEditado);
    //this.atualizarLocalStorage();
  }

  adicionarItemNaLista(nomeItem: string) {
    const item = this.criarItem(nomeItem);
    this.listaDeCompra.push(item);
    //this.atualizarLocalStorage();
  }

  atualizarLocalStorage() {
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra))
  }

}
