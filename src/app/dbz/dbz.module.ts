import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponet } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add/add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [MainComponet, ListComponent, AddCharacterComponent],
  exports: [MainComponet],
})
export class DbzModule {}
