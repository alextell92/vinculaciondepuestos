import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalasPuntuacionFormComponent } from './escalas-puntuacion-form.component';

describe('EscalasPuntuacionFormComponent', () => {
  let component: EscalasPuntuacionFormComponent;
  let fixture: ComponentFixture<EscalasPuntuacionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EscalasPuntuacionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscalasPuntuacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
