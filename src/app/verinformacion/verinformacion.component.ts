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

      this.total = this.datos.reduce(
        (acc, item) => {
          acc.conocimiento += Number(item.conocimiento) || 0;
          acc.esfuerzoFisico += Number(item.esfuerzoFisico) || 0;
          acc.experiencia += Number(item.experiencia) || 0;
          acc.habilidadMental += Number(item.habilidadMental) || 0;
          acc.preparacionAcademica += Number(item.preparacionAcademica) || 0;
          acc.responsabilidad+=Number(item.responsabilidad)||0
          return acc;
        },
        { conocimiento: 0, esfuerzoFisico: 0, experiencia: 0, habilidadMental: 0, preparacionAcademica: 0,responsabilidad:0 }
      );
    });
  }
}
