import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ModeloMarca } from './modelo.model';

@Injectable({
  providedIn: 'root'
})
export class BuscarFipeService {

  constructor(private htpp: HttpClient) { }


  urlAno(id: number){
    let a = id;
    console.log(a);
    return this.htpp.get<ModeloMarca>( `https://dentalclouddev.s3.amazonaws.com/challenge/tarot.json`);
}
}
