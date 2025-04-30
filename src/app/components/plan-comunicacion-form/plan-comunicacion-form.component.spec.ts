import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanComunicacionFormComponent } from './plan-comunicacion-form.component';

describe('PlanComunicacionFormComponent', () => {
  let component: PlanComunicacionFormComponent;
  let fixture: ComponentFixture<PlanComunicacionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanComunicacionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanComunicacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
