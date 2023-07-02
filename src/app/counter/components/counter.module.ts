import { NgModule } from '@angular/core';
import { CounterComponet } from './counter/counter.component';

@NgModule({
  declarations: [CounterComponet],
  exports: [CounterComponet],
})
export class CounterModule {}
