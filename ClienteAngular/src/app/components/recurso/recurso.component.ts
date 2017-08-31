import { Component, OnInit } from '@angular/core';
import { RecursoService } from '../../services/recurso.service'
import { Recurso } from '../../models/recurso'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-recurso',
  templateUrl: './recurso.component.html',
  providers: [ RecursoService ]
})
export class RecursoComponent implements OnInit {
  public recurso:Recurso
  public ok:boolean=false

  constructor(public recursoService:RecursoService) {
    this.recurso = new Recurso(1,'','','',true)
   }

  ngOnInit() {
  }

  guardar(forma:NgForm){
    console.log(forma)
    this.recursoService.guardar(this.recurso).subscribe(data=>{
        this.ok = true
        //this.recurso = new Recurso(1,'','','',true)
        forma.reset()
    })
  }

  cancelar(forma:NgForm){
    console.log(forma)
        this.ok = false
        forma.reset()
  }

}
