import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuacionPuestosFormComponent } from './valuacion-puestos-form.component';

describe('ValuacionPuestosFormComponent', () => {
  let component: ValuacionPuestosFormComponent;
  let fixture: ComponentFixture<ValuacionPuestosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValuacionPuestosFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValuacionPuestosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
