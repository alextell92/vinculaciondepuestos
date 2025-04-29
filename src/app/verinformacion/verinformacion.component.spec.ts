import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerinformacionComponent } from './verinformacion.component';

describe('VerinformacionComponent', () => {
  let component: VerinformacionComponent;
  let fixture: ComponentFixture<VerinformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerinformacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerinformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
