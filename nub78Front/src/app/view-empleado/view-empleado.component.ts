import { Component, Input } from '@angular/core';
import { Tecnico } from '../models/tecnico/tecnico';
import { Elemento } from '../models/elemento/elemento';
import { TecnicoService } from '../shared/tecnico/tecnico.service';
import { Elementoxtecnico } from '../models/elemento/elementoxtecnico';
import { SucursalService } from '../shared/sucursal/sucursal.service';
import { Sucursal } from '../models/sucursal/sucursal';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms'

@Component({
  selector: 'app-view-empleado',
  templateUrl: './view-empleado.component.html',
  styleUrls: ['./view-empleado.component.css']
})
export class ViewEmpleadoComponent {
  @Input()
  public tecnico: Tecnico = new Tecnico("", "", "", 0);

  public listElementos: Elementoxtecnico[] = []
  public listSucursales: Sucursal[] = []

  public id: string = "";
  public nombre: string = "";
  public sucursal_id: string = "";
  public sueldo: number = 0;
  constructor(public tecnicoService: TecnicoService,
    public sucursalService: SucursalService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.sucursalService.getSucursales().subscribe(sucursales => {
      this.listSucursales = sucursales
    })
  }
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.tecnicoService.getElementos(this.tecnico.id).subscribe(
      elementos => {
        console.log(elementos);
        this.listElementos = elementos;
      }
    )
  }
  selectedSucursal(value: string) {
    console.log("entraaa" + value)
    this.listSucursales.forEach(sucursal => {
      if (sucursal.nombre == value) {
        this.sucursal_id = sucursal.id
      }
    })

  }
  submit(event: NgForm) {
    console.log("event.target.nombre.value")
    console.log(event.value)
    var tecnico = {
      "id": "",
      "nombre": "",
      "sueldo": 0,
      "sucursal_id": "",
      "elementos": {

      }
    }
    if (event.value.nombre == '') {
      tecnico.nombre = this.tecnico.nombre
    } else {
      tecnico.nombre = event.value.nombre
    }
    if (event.value.sueldo == '') {
      tecnico.sueldo = this.tecnico.sueldo
    } else {
      tecnico.sueldo = event.value.sueldo
    }
    tecnico.sucursal_id = this.sucursal_id
    let elementos = {}
    this.listElementos.forEach(elemento =>{
      let id = elemento.id
      console.log()
    })

  }

}
