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
      const indiceMovil = alfabetoMovil.indexOf(caracterCifrado.toLowerCase());

      if (indiceMovil !== -1) {
        const caracterDescifrado = alfabetoFijo[indiceMovil];
        mensajeDescifrado += caracterCifrado === caracterCifrado.toUpperCase() ? caracterDescifrado.toUpperCase() : caracterDescifrado;
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

    const letraClave = clave[0].toLowerCase();
    const letraAlineada = clave[1].toLowerCase();

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
}
