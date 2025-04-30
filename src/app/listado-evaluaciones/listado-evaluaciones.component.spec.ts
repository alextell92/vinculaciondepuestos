import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEvaluacionesComponent } from './listado-evaluaciones.component';

describe('ListadoEvaluacionesComponent', () => {
  let component: ListadoEvaluacionesComponent;
  let fixture: ComponentFixture<ListadoEvaluacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListadoEvaluacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoEvaluacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
