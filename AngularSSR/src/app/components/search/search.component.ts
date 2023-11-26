import { Component, Input, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  
  isWindows: boolean = true;
  @Input() placeholder = '';
  
  constructor(@Inject(PLATFORM_ID) private _platformId: Object) {  }

  ngOnInit() {
    if(isPlatformBrowser(this._platformId)) {
      const userAgent = window.navigator.userAgent.toLowerCase();
      if (userAgent.includes('mac')) {
        this.isWindows = false;
      }
    }
  }
}
