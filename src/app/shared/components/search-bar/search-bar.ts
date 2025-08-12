import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSearch } from '@ng-icons/lucide';

@Component({
  selector: 'app-search-bar',
  imports: [NgIcon],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
  viewProviders: [provideIcons({ lucideSearch })],
})
export class SearchBar {}
