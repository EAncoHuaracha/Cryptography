import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CifradoService } from './Services/cifrado.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DescifradoService } from './Services/descifrado.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cryptoForm: FormGroup;
  resultado: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private cifradoService: CifradoService,
    private descifradorService: DescifradoService
  ) {
    this.cryptoForm = this.formBuilder.group({
      message: ['', Validators.required],
      operation: ['encrypt', Validators.required]
    });
  }

  onSubmit() {
    if (this.cryptoForm.valid) {
      const mensaje = this.cryptoForm.value.message;
      const operacion = this.cryptoForm.value.operation;
      this.limpiarFormulario();
      if (operacion === 'encrypt') {
        this.resultado = this.cifradoService.cifrarPorGrupo(mensaje);
      } else {
        this.resultado = this.descifradorService.descifrarAlberti(mensaje, 'Ao');
      }
    }
  }

  limpiarFormulario() {
    this.cryptoForm.reset({
      operation: 'encrypt'
    });
    this.resultado = '';
  }
}
