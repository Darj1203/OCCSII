import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormApartamentosComponent } from './form-apartamentos.component';

describe('FormApartamentosComponent', () => {
  let component: FormApartamentosComponent;
  let fixture: ComponentFixture<FormApartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormApartamentosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormApartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
