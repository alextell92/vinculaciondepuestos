import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ValuacionPuestosFormComponent} from './components/valuacion-puestos-form/valuacion-puestos-form.component'

const routes: Routes = [
  { path: "Home", component: HomeComponent },
  { path : "valuacionPuestos", component:ValuacionPuestosFormComponent},
  //Esta ruta, siempre debe ir al final, de lo contrario no permite navegar a las rutas que coloquemos despues
  { path: "**", pathMatch: "full", redirectTo: "/Home" },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
