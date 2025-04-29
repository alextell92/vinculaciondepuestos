import { Injectable } from "@angular/core";
import { FormularioModel } from "../models/formulario.model";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: "root",
})
export class ControlService {
  constructor(private afs: AngularFirestore) {}

  almacenar(formulario: FormularioModel) {
    return this.afs.collection("formularios").add(formulario);
  }

  obtenerDatos(){
    return this.afs.collection('formularios').valueChanges()

  }
}
