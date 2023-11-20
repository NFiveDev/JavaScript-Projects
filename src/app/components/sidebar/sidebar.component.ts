import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, RouterOutlet],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})

export class SidebarComponent {}
