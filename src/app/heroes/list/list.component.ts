import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public listHeroes:string[] = ['Spiderman','Hulk','Thor','Captain America','Black Panther'];
  public deletedHeroe?:string;

  deleteHeroe():void {

    this.deletedHeroe = this.listHeroes.pop()
  }
}
