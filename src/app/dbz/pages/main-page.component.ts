import { Character } from './../interfaces/character.interface';
import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  standalone: false
})
export class MainPageComponent {
  constructor(private dbzService:DbzService){ }

  get characters():Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id:string ) {
    this.dbzService.deleteCharacter(id);
  }

  onAddCharacter(character:Character) {
    this.dbzService.addCharacter(character);
  }

}

