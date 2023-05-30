import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit, OnChanges {

  @Input() itemQueSeraEditado!: Item;

  editando = false;
  textoBtn = 'Salvando item';
  valorItem!: string;
  constructor(
    private service: ListaDeCompraService
  ) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['itemQueSeraEditado'].firstChange) {
      this.editando = true;
      this.textoBtn = 'Editando item';
      this.valorItem = this.itemQueSeraEditado.nome;
    }
  }

  adicionarItem() {
    this.service.adicionarItemNaLista(this.valorItem);
    this.limparCampo();
  }

  editarItem(){
    this.service.editarItemNaLista(this.itemQueSeraEditado ,this.valorItem);
    this.limparCampo();
    this.editando = false;
    this.textoBtn = 'Salvando item';
  }

  limparCampo() {
    this.valorItem = '';
  }
}
