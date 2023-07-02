import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/components/counter.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  imports: [BrowserModule, FormsModule, CounterModule, HeroesModule, DbzModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
