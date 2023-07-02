import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>{{ counter }}</h3>

<button (click)="increaseBy(0)">+1</button>
<button (click)="ResetBy()">RESET</button>
<button (click)="increaseBy(1)">-1</button>
  `,
})
export class CounterComponet {
  public counter: number = 10;
  increaseBy(value: number): void {
    if (value == 0) {
      this.counter = this.counter + 1;
    } else {
      this.counter = this.counter - 1;
    }
  }
  ResetBy(): void {
    this.counter = 10;
  }
  constructor(){ }
}
