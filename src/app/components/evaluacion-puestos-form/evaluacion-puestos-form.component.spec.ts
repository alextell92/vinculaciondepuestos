import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionPuestosFormComponent } from './evaluacion-puestos-form.component';

describe('EvaluacionPuestosFormComponent', () => {
  let component: EvaluacionPuestosFormComponent;
  let fixture: ComponentFixture<EvaluacionPuestosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvaluacionPuestosFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluacionPuestosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
