import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./share/header/header.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ValuacionPuestosFormComponent } from "./components/valuacion-puestos-form/valuacion-puestos-form.component";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { firebaseConfig } from "../enviroments/enviroment";
import { VerinformacionComponent } from './verinformacion/verinformacion.component';
import { EscalasPuntuacionFormComponent } from './components/escalas-puntuacion-form/escalas-puntuacion-form.component';
import { ComparacionSalarialFormComponent } from './components/comparacion-salarial-form/comparacion-salarial-form.component';
import { PlanComunicacionFormComponent } from './components/plan-comunicacion-form/plan-comunicacion-form.component';
import { EvaluacionPuestosFormComponent } from './components/evaluacion-puestos-form/evaluacion-puestos-form.component';
import { ListadoEvaluacionesComponent } from './listado-evaluaciones/listado-evaluaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ValuacionPuestosFormComponent,
    VerinformacionComponent,
    EscalasPuntuacionFormComponent,
    ComparacionSalarialFormComponent,
    PlanComunicacionFormComponent,
    EvaluacionPuestosFormComponent,
    ListadoEvaluacionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
