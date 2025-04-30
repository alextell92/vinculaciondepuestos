import { Component } from "@angular/core";
import { ControlService } from "../services/control.service";

@Component({
  selector: "app-verinformacion",
  templateUrl: "./verinformacion.component.html",
  styleUrl: "./verinformacion.component.css",
})
export class VerinformacionComponent {
  datos: any[] = [];
  total: any;

  constructor(private controlService: ControlService) {
    this.controlService.obtenerDatos().subscribe((resp) => {
      this.datos = resp;
    });
  }

  getTotal(item: any): number {
    return Number(item.conocimiento)
       + Number(item.esfuerzoFisico)
       + Number(item.experiencia)
       + Number(item.habilidadMental)
       + Number(item.preparacionAcademica)
       + Number(item.responsabilidad)
       + Number(item.puesto);
  }


}
