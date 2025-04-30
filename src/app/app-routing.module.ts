import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ValuacionPuestosFormComponent} from './components/valuacion-puestos-form/valuacion-puestos-form.component'
import { VerinformacionComponent } from './verinformacion/verinformacion.component';
import { EscalasPuntuacionFormComponent } from './components/escalas-puntuacion-form/escalas-puntuacion-form.component';
import { ComparacionSalarialFormComponent } from './components/comparacion-salarial-form/comparacion-salarial-form.component';
import { PlanComunicacionFormComponent } from './components/plan-comunicacion-form/plan-comunicacion-form.component';
import { EvaluacionPuestosFormComponent } from './components/evaluacion-puestos-form/evaluacion-puestos-form.component';

const routes: Routes = [
  { path: "Home", component: HomeComponent },
  { path : "valuacionPuestos", component:ValuacionPuestosFormComponent},
  {path: "verInformacion",component:VerinformacionComponent},
  {path: "escalasPuntuacion",component:EscalasPuntuacionFormComponent},
  {path: "comparacionSalarial",component:ComparacionSalarialFormComponent},
  {path: "planComunicacion",component:PlanComunicacionFormComponent},
  {path: "evaluacionPuestos",component:EvaluacionPuestosFormComponent},

  //Esta ruta, siempre debe ir al final, de lo contrario no permite navegar a las rutas que coloquemos despues
  { path: "**", pathMatch: "full", redirectTo: "/Home" },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
