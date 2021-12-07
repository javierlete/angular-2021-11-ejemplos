import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { dniValidator } from '../dni-validator.directive';
import { Perfil } from '../perfil';
@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent {
  datos: Perfil = { nombre: 'Prueba', apellidos: 'Pruebez', dni: '12345678Z', direccion: { calle: 'Su calle', numero: 5, cp: '12345' } };

  get nombre() { return this.formulario.get('nombre') as FormControl }
  get dni() { return this.formulario.get('dni') as FormControl }
  get alias() { return this.formulario.get('alias') as FormArray }

  constructor(private fb: FormBuilder) { }

  formulario = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(5)]],
    apellidos: [''],
    dni: ['', [Validators.pattern(/^\d{8}[A-Z]$/), dniValidator()]],
    direccion: this.fb.group({
      calle: [''],
      numero: [''],
      cp: ['']
    }),
    alias: this.fb.array([
      this.fb.control('')
    ])
  });

  modificar(): void {
    this.formulario.setValue(this.datos);
  }

  recibirDatos(): void {
    this.datos = this.formulario.value;
    console.log(this.datos);
  }

  nuevoAlias(): void {
    this.alias.push(this.fb.control(''));
  }

  esValido(control: AbstractControl): boolean {
    return !control.invalid && (control.dirty || control.touched);
  }

  esInvalido(control: AbstractControl): boolean {
    return control.invalid && (control.dirty || control.touched);
  }
}
