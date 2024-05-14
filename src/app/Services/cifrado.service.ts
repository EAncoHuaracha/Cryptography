import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CifradoService {

  constructor() { }

  cifrarPorGrupo(mensaje: string): string {
    const clave = [4, 3, 5, 2, 1, 6]; // Clave
    let frasenueva = '';
    let j = 0;

    // Eliminar espacios en blanco
    for (const char of mensaje) {
      if (char !== ' ') {
        frasenueva += char;
        j++;
      }
    }

    console.log(frasenueva);

    // Rellenar con 'X'
    const caracteres_restantes = (clave.length - (j % (clave.length))) % clave.length;
    for (let i = 0; i < caracteres_restantes; i++) {
      frasenueva += 'X';
    }

    let resultado = '';
    let aux = '';

    // Permutación por grupos
    for (let i = 0; i < frasenueva.length; i++) {
      aux += frasenueva[i];
      if ((i + 1) % clave.length === 0) {
        let aux2 = '';
        for (const index of clave) {
          aux2 += aux[index - 1];
        }
        resultado += aux2 + ' ';
        aux = '';
      }
    }
    resultado = resultado.toLocaleLowerCase();
    return resultado;
  }

}
