import { Component } from "@angular/core";
import { ListasValuacionService } from "../../services/listas-valuacion.service";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { FormularioModel } from "../../models/formulario.model";
import { ControlService } from "../../services/control.service";
@Component({
  selector: "app-valuacion-puestos-form",
  templateUrl: "./valuacion-puestos-form.component.html",
  styleUrl: "./valuacion-puestos-form.component.css",
})
export class ValuacionPuestosFormComponent {
  formulario: FormularioModel = new FormularioModel();
  miFormulario: FormGroup;

  preparacionAcademica_list: any[] = [];
  experiencia_list: any[] = [];
  responsabilidad_list: any[] = [];
  habilidadMental_list: any[] = [];
  esfuerzoFisico_list: any[] = [];
  conocimientos_list: any[] = [];

  constructor(
    _listasService: ListasValuacionService,
    private fb: FormBuilder,
    private fs: ControlService
  ) {
    //Mapeamos las listas del servicio
    this.preparacionAcademica_list = _listasService.preparacionAcademica_list;
    this.experiencia_list = _listasService.experiencia_list;
    this.responsabilidad_list = _listasService.responsabilidad_list;
    this.habilidadMental_list = _listasService.habilidadMental_list;
    this.esfuerzoFisico_list = _listasService.esfuerzoFisico_list;
    this.conocimientos_list = _listasService.conocimientos_list;

    this.miFormulario = this.fb.group({
      nombreTrabajador: new FormControl("", Validators.required),
      preparacionAcademica: new FormControl(null, Validators.required),
      experiencia: new FormControl(null, Validators.required),
      responsabilidad: new FormControl(null, Validators.required),
      habilidadMental: new FormControl(null, Validators.required),
      esfuerzoFisico: new FormControl(null, Validators.required),
      conocimiento: new FormControl(null, Validators.required),
    });
  }

  async onSubmit() {
    if (this.miFormulario.valid) {
      const formulario: FormularioModel = this.miFormulario.value;
      await this.fs.almacenar(formulario);
      this.miFormulario.reset();
    }
  }
}
