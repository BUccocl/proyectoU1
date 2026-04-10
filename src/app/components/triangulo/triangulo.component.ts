import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

import { IonCard, IonCardHeader, IonCardTitle, IonCardContent,
IonItem, IonLabel, IonInput, IonButton } from '@ionic/angular/standalone';

import { TrianguloEscaleno } from '../../models/trianguloEscaleno';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    FormsModule,
    NgIf
  ]
})

export class TrianguloComponent {

  ladoA:number = 0;
  ladoB:number = 0;
  ladoC:number = 0;

  perimetro:number = 0;
  resultadoVisible:boolean = false;

  calcular(){

    const triangulo = new TrianguloEscaleno(this.ladoA,this.ladoB,this.ladoC);

    this.perimetro = triangulo.calcularPerimetro();

    this.resultadoVisible = true;

  }

}
