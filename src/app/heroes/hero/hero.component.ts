import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public nombre:string = 'ironman';
  public edad:number = 45;

  get capitalizedName():string {
    return this.nombre.toUpperCase();
  }

  description():string {
    return `${this.nombre} - ${this.edad}`
  }

  changeNombre():void {
    this.nombre = 'Spiderman';
  }

  changeEdad():void {
    this.edad = 24;
  }

  resetData():void {
    this.nombre = 'ironman';
    this.edad = 45
  }
}
