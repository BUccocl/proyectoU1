import { FiguraGeometrica } from "./figuraGeometrica";

export class Circulo extends FiguraGeometrica {

  radio: number;

  constructor(radio: number){
    super("Circulo");
    this.radio = radio;
  }

  calcularPerimetro(): number {
    return 2 * Math.PI * this.radio;
  }

}