import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AboutComponent, ContactComponent, HomeComponent],
  imports: [CommonModule, MatButtonModule],
})
export class CoreModule {}
