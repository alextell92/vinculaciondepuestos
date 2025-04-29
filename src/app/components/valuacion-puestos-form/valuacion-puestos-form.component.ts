import { Component } from '@angular/core';
import { ListasValuacionService } from '../../services/listas-valuacion.service'

@Component({
  selector: 'app-valuacion-puestos-form',
  templateUrl: './valuacion-puestos-form.component.html',
  styleUrl: './valuacion-puestos-form.component.css'
})
export class ValuacionPuestosFormComponent {

  preparacionAcademica_list: any[]=[];
  experiencia_list: any[]=[];
  responsabilidad_list: any[]=[];
  habilidadMental_list: any[]=[];
  esfuerzoFisico_list:any[]=[];
  conocimientos_list:any[]=[];


  constructor(_listasService: ListasValuacionService){
    //Mapeamos las listas del servicio
    this.preparacionAcademica_list=_listasService.preparacionAcademica_list;
    this.experiencia_list=_listasService.experiencia_list;
    this.responsabilidad_list=_listasService.responsabilidad_list;
    this.habilidadMental_list=_listasService.habilidadMental_list;
    this.esfuerzoFisico_list=_listasService.esfuerzoFisico_list;
    this.conocimientos_list=_listasService.conocimientos_list;
  }


}
