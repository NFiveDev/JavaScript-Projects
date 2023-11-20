import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})

export class HeaderComponent {
  @Input() showSidebar: boolean = false;
  @Output() toggleSideBarEvent = new EventEmitter<boolean>();

  toggleSideBar() {
    this.toggleSideBarEvent.emit(!this.showSidebar)
  }
}
