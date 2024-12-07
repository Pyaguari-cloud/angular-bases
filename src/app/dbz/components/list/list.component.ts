import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  @Input()
  public characterList:Character[] = [{
    id: 'abc123',
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public emitDeletedCharacter:EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string):void {
    if(!id) return;
    this.emitDeletedCharacter.emit(id)
 }
}
