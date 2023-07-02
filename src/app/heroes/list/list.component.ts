import { Component, OnInit } from '@angular/core';

@Component({
  selector: '<app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public heoresNames: string[] = ['Iroman', 'Spiderman', 'Hulk', 'DareDevil'];
  public deleteHero?: string;

  removeLastHero(): void {
    this.deleteHero = this.heoresNames.pop();
  }

  constructor() {}
}
