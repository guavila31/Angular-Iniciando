import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoExerciciosComponent } from './descricao-exercicios.component';

describe('DescricaoExerciciosComponent', () => {
  let component: DescricaoExerciciosComponent;
  let fixture: ComponentFixture<DescricaoExerciciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescricaoExerciciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescricaoExerciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
