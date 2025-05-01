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
  cargando: boolean = true;

ocultarLoader: boolean = false;
  

variantes: any[]=['gold','silver','bronze'];

  constructor(private controlService: ControlService) {

   
   
  }


  ngOnInit(){
    const inicioCarga = Date.now();

    this.controlService.obtenerDatos().subscribe((resp) => {
      this.datos = resp;
      this.obtenertop3();
  
      const tiempoTranscurrido = Date.now() - inicioCarga;
      const tiempoRestante = Math.max(0, 900 - tiempoTranscurrido);
  
      setTimeout(() => {
        this.ocultarLoader = true; // activa fade
        setTimeout(() => {
          this.cargando = false; // oculta del DOM después del fade
        }, 500); // fade-out de 0.5 segundos
      }, tiempoRestante);
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
