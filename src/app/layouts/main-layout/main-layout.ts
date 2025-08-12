import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { SearchBar } from '../../shared/components/search-bar/search-bar';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBell, lucideMenu } from '@ng-icons/lucide';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    Sidebar,
    SearchBar,
    NgIcon,
    MatIconModule,
    MatBadgeModule,
  ],
  viewProviders: [
    provideIcons({
      lucideMenu,
      lucideBell,
    }),
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}
