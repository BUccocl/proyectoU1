import { FiguraGeometrica } from "./figuraGeometrica";

export class TrianguloEscaleno extends FiguraGeometrica {

  ladoA: number;
  ladoB: number;
  ladoC: number;

  constructor(ladoA:number, ladoB:number, ladoC:number){
    super("Triangulo Escaleno");
    this.ladoA = ladoA;
    this.ladoB = ladoB;
    this.ladoC = ladoC;
  }

  calcularPerimetro(): number {
    return this.ladoA + this.ladoB + this.ladoC;
  }

}