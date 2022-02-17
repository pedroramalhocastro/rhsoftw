import { observable, Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BuscarFipeService } from '../buscar-fipe.service';
import { ModeloMarca } from '../modelo.model';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  modelo2: ModeloMarca = {
    imagesUrl: [],
    cards: []
  };
  displayedColumns: string[] = [ 'nome'];
  dataSource = new MatTableDataSource(this.modelo2.cards);
  dataSourceModelo = new MatTableDataSource(this.modelo2.cards);

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private buscarFipe: BuscarFipeService) {
this.listarMarcas();

  }

  ngOnInit(): void {
  }

  listarMarcas(){
    let codigo = 5;
   this.buscarFipe.urlAno(codigo).subscribe( (dados) =>
   { this.modelo2 = dados;
    this.dataSource = new MatTableDataSource( this.modelo2.cards);
     console.log( this.modelo2.cards);
   });

  }

}
