import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ListasValuacionService {
  preparacionAcademica_list: any[] = [];
  experiencia_list: any[] = [];
  responsabilidad_list: any[] = [];
  habilidadMental_list: any[] = [];
  esfuerzoFisico_list: any[] = [];
  conocimientos_list: any[] = [];
  puestos_list:any[] = [];

  constructor() {
    this.definicionListaPrepacionAcad();
    this.definicionListaExperiencia();
    this.definicionListaResponsabilidad();
    this.definicionListaHabilidadMental();
    this.definicionListaEsfuerzoFisico();
    this.definicionListaConocimietos();
    this.definicionListaPuestos();
  }

  definicionListaPrepacionAcad(): void {
    //Lista de preparacion academica
    this.preparacionAcademica_list = [
      {
        value: 1,
        descripcion: "GRADO 1 : PRIMARIA",
      },
      {
        value: 2,
        descripcion: "GRADO 2 : SECUNDARIA",
      },
      {
        value: 3,
        descripcion: "GRADO 3: CARRERA TÉCNICA  PREP. O BACHILL.",
      },
      {
        value: 4,
        descripcion: "GRADO 4: CARRERA PROFESIONAL",
      },
    ];
  }

  definicionListaExperiencia(): void {
    //Lista de experiencia
    this.experiencia_list = [
      {
        value: 1,
        descripcion: "GRADO 1: REQUIERE DE 6 MESES A UN AÑO",
      },
      {
        value: 2,
        descripcion: "GRADO 2: DE  MAS DE UN AÑO  A UN AÑO Y 6 MESES",
      },
      {
        value: 3,
        descripcion: "GRADO 3: DE MAS DE  UN AÑO 6 MESES A  DOS AÑOS",
      },
      {
        value: 4,
        descripcion: "GRADO 4: DE MAS DE DOS AÑOS",
      },
    ];
  }

  definicionListaResponsabilidad(): void {
    //Lista de experiencia
    this.responsabilidad_list = [
      {
        value: 1,
        descripcion: "GRADO 1:  MINIMA SE LIMITA A SU TRABAJO",
      },
      {
        value: 2,
        descripcion:
          "GRADO 2: MEDIA: RESPONSABILIDAD POR SU PUESTO Y SU FALTA IMPACTA EN EL DEPARTAMENTO DE MANTENIMIENTO",
      },
      {
        value: 3,
        descripcion:
          "GRADO 3:ALTA:  SUPERVISIÓN DE TODO EL ÁREA DE MANTENIMIENTO Y SU FALTA IMPACTA A LA EMPRESA",
      },
    ];
  }

  definicionListaHabilidadMental(): void {
    //Lista de experiencia
    this.habilidadMental_list = [
      {
        value: 1,
        descripcion: "GRADO 1: MÍNIMA",
      },
      {
        value: 2,
        descripcion: "GRADO 2: REGULAR",
      },
      {
        value: 3,
        descripcion: "GRADO 3: MÁXIMA",
      },
    ];
  }

  definicionListaEsfuerzoFisico(): void {
    //Lista de experiencia
    this.esfuerzoFisico_list = [
      {
        value: 1,
        descripcion: "GRADO 1: MÍNIMO",
      },
      {
        value: 2,
        descripcion: "GRADO 2: REGULAR",
      },
      {
        value: 3,
        descripcion: "GRADO 3: MÁXIMO",
      },
    ];
  }

  definicionListaConocimietos(): void {
    //Lista de experiencia
    this.conocimientos_list = [
      {
        value: 1,
        descripcion: "GRADO 1: BASICO",
      },
      {
        value: 2,
        descripcion: "GRADO 2: INTERMEDIO",
      },
      {
        value: 3,
        descripcion: "GRADO 3 AVANZADO",
      },
    ];
  }

  definicionListaPuestos(): void {
    //Lista de experiencia
    this.puestos_list = [
      {
        value: 1,
        descripcion: "Director General",
      },
      {
        value: 2,
        descripcion: "Gerente de Operaciones",
      },
      {
        value: 3,
        descripcion: "Gerente de Finanzas",
      },
      {
        value: 4,
        descripcion: "Gerente de Recursos Humanos",
      },
      {
        value: 5,
        descripcion: "Gerente de Transporte",
      },
      {
        value: 6,
        descripcion: "Coordinador de Almacén",
      },
      {
        value: 7,
        descripcion: "Analista de datos Logisticos",
      },
      {
        value: 8,
        descripcion: "Gerente de Ventas",
      },
      {
        value: 9,
        descripcion: "Asistente Administrativo",
      },
      {
        value: 10,
        descripcion: "Recepcionista",
      }
    ];
  }
}
