import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

import { IonCard, IonCardHeader, IonCardTitle, IonCardContent,
IonItem, IonLabel, IonInput, IonButton } from '@ionic/angular/standalone';

import { Circulo } from '../../models/circulo';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
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

export class CirculoComponent {

  radio:number = 0;
  perimetro:number = 0;
  resultadoVisible:boolean = false;

  calcular(){

    const circulo = new Circulo(this.radio);

    this.perimetro = circulo.calcularPerimetro();

    this.resultadoVisible = true;

  }

}