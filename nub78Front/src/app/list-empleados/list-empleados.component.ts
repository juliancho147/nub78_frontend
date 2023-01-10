import { Component } from '@angular/core';
import { Tecnico } from '../models/tecnico/tecnico';
import { TecnicoService } from '../shared/tecnico/tecnico.service';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent {
    public listTecnicos: Tecnico[] = [];
    public tecnico:Tecnico = new Tecnico("","","",0);
    constructor(private tecnicoService:TecnicoService){}
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.tecnicoService.getAllTecnicos().subscribe(
        tecnicos =>{
          console.log(tecnicos)
          this.listTecnicos = tecnicos;
        }
      )

    }
    viewTecnico(tecnico:Tecnico){
      this.tecnico = tecnico
    }
}
