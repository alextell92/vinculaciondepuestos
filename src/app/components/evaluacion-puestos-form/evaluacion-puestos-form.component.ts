import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluacion-puestos-form',
  templateUrl: './evaluacion-puestos-form.component.html',
  styleUrl: './evaluacion-puestos-form.component.css'
})
export class EvaluacionPuestosFormComponent {

  constructor(private route:Router){

  }

  IrEvaluar(){
    this.route.navigateByUrl("/listadoEvaluaciones");
  }
}
