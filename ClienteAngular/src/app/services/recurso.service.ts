import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import { Recurso } from '../models/recurso'
import 'rxjs/Rx'
@Injectable()
export class RecursoService {

  constructor(public http:Http) { }

  guardar(recurso:Recurso){
    let url = "http://localhost:2300/api/recurso"
    let body = JSON.stringify(recurso)
    let headers = new Headers({
    'Content-Type':'Application/json'
  }) 
    return this.http.post(url,body,{headers}).map(res=>{
        res.json();
    })
  }

}
