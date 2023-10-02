import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent {

  personas:Persona[] = [
    {nombre: 'Daniel', edad: 21},
    {nombre: 'Andres', edad: 22},
    {nombre: 'Yuliana', edad: 19},
    {nombre: 'Maria', edad: 20}
  ];


}
