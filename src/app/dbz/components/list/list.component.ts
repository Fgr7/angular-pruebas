import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 100,
    },
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDelectCharacter(id?: string): void {
    //TODO: EMITIR EL ID del personaje
    if (!id) return;

    this.onDelete.emit(id);
  }
}
