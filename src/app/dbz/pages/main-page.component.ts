import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main',
  templateUrl: './main-page.component.html',
})
export class MainComponet {
  constructor(private debzService: DBZService) {}

  get characters(): Character[] {
    return [...this.debzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.debzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.debzService.addCharacter(character);
  }
}
