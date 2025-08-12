import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { sidebarNavigation } from '../../constant/constant';
import { MatButtonModule } from '@angular/material/button';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideKanban,
  lucideLayoutDashboard,
  lucidePlus,
  lucideSettings,
  lucideUser,
} from '@ng-icons/lucide';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, CommonModule, NgIcon, MatButtonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  viewProviders: [
    provideIcons({
      lucideLayoutDashboard,
      lucideKanban,
      lucidePlus,
      lucideUser,
      lucideSettings,
    }),
  ],
})
export class Sidebar {
  sidebarNavigation = sidebarNavigation;
}
