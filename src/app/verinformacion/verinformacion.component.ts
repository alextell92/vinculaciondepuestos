import { Component } from "@angular/core";
import { ControlService } from "../services/control.service";

@Component({
  selector: "<app-verinformacion>",
  templateUrl: "./verinformacion.component.html",
  styleUrl: "./verinformacion.component.css",
})
export class VerinformacionComponent {
  datos: any[] = [];
  top3: any[] = [];

  imagenes: any[] = ['../../assets/1.png','../../assets/2.png','../../assets/3.png'];
  total: any;
variantes: any[]=['gold','silver','bronze'];

  constructor(private controlService: ControlService) {
    this.controlService.obtenerDatos().subscribe((resp) => {
      this.datos = resp;
      this.obtenertop3()
      
    });
   
  }

  getTotal(item: any): number {
    return (
      Number(item.conocimiento) +
      Number(item.esfuerzoFisico) +
      Number(item.experiencia) +
      Number(item.habilidadMental) +
      Number(item.preparacionAcademica) +
      Number(item.responsabilidad)
    );
  }

  obtenertop3() {
    // Ordenar por edad de mayor a menor
    const criterios = ['habilidadMental', 'responsabilidad', 'experiencia', 'conocimiento', 'preparacionAcademica','esfuerzoFisico'];

  

const arreglo= this.datos.map(data => {
  const puntajeTotal = criterios.reduce((sum, key) => sum + parseInt(data[key] || '0'), 0);
  return {
    nombreTrabajador: data.nombreTrabajador,
    puntajeTotal,
    puesto:data.puesto
  };
}).sort((a, b) => b.puntajeTotal - a.puntajeTotal); // ordenar de mayor a menor
this.top3 = arreglo.slice(0, 3);





    
  }
}
