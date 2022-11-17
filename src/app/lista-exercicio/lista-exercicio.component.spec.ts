import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaExercicioComponent } from './lista-exercicio.component';

describe('ListaExercicioComponent', () => {
  let component: ListaExercicioComponent;
  let fixture: ComponentFixture<ListaExercicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaExercicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaExercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
