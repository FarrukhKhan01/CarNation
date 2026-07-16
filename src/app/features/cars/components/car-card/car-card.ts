import { Component, Input, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-card',
  imports: [CommonModule],
  templateUrl: './car-card.html',
  styleUrl: './car-card.css',
})
export class CarCard {


  @Input() cars!: any;
}                                                                                                                                                                                                         