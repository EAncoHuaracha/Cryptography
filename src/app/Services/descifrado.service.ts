import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DescifradoService {

  constructor() { }
  descifrarAlberti(mensajeCifrado: string, clave: string): string {
    const alfabetoFijo = this.generarAlfabetoFijo();
    const alfabetoMovil = this.generarAlfabetoMovil(clave);

    let mensajeDescifrado = '';

    for (const caracterCifrado of mensajeCifrado) {
      const indiceMovil = alfabetoMovil.indexOf(this.lowerCase(caracterCifrado));

      if (indiceMovil !== -1) {
        const caracterDescifrado = alfabetoFijo[indiceMovil];
        mensajeDescifrado += caracterCifrado === this.upperCase(caracterCifrado) ? this.upperCase(caracterDescifrado) : caracterDescifrado;
      } else {
        mensajeDescifrado += caracterCifrado;
      }
    }

    return mensajeDescifrado;
  }

  private generarAlfabetoFijo(): string {
    const alfabetoCompleto = 'abcdefghijklmnopqrstuvwxyz';
    return alfabetoCompleto;
  }

  private generarAlfabetoMovil(clave: string): string {
    const alfabetoCompleto = 'abcdefghijklmnopqrstuvwxyz';

    const letraClave = this.lowerCase(clave[0]);
    const letraAlineada = this.lowerCase(clave[1]);

    const indiceClave = alfabetoCompleto.indexOf(letraClave);
    const indiceAlineada = alfabetoCompleto.indexOf(letraAlineada);

    const distancia = (indiceAlineada + 1) - (indiceClave + 1);

    const alfabetoMovil = this.rotarAlfabeto(alfabetoCompleto, distancia);

    return alfabetoMovil;
  }

  private rotarAlfabeto(alfabeto: string, distancia: number): string {
    const len = alfabeto.length;
    return alfabeto.slice(distancia % len) + alfabeto.slice(0, distancia % len);
  }

  private lowerCase(alfabeto: string): string {
    let lowerCaseStr = '';
    for (let i = 0; i < alfabeto.length; i++) {
      const charCode = alfabeto.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        lowerCaseStr += String.fromCharCode(charCode + 32);
      } else {
        lowerCaseStr += alfabeto.charAt(i);
      }
    }
    return lowerCaseStr;
  }

  private upperCase(alfabeto: string): string {
    let upperCaseStr = '';
    for (let i = 0; i < alfabeto.length; i++) {
      const charCode = alfabeto.charCodeAt(i);
      if (charCode >= 97 && charCode <= 122) {
        upperCaseStr += String.fromCharCode(charCode - 32);
      } else {
        upperCaseStr += alfabeto.charAt(i);
      }
    }
    return upperCaseStr;
  }
}
