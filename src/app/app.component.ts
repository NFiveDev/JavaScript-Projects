import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarComponent, MatSidenavModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';
  sidebarOpen = true;

  toggleSidebar(value: boolean) {
    this.sidebarOpen = value;
  }

}
