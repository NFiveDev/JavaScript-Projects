import { Component, Input } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Input() placeholder = '';
  
}
