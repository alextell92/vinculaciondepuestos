import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparacionSalarialFormComponent } from './comparacion-salarial-form.component';

describe('ComparacionSalarialFormComponent', () => {
  let component: ComparacionSalarialFormComponent;
  let fixture: ComponentFixture<ComparacionSalarialFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComparacionSalarialFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparacionSalarialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
