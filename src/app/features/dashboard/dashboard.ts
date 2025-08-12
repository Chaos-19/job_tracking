import { Component } from '@angular/core';
import { SearchBar } from '../../shared/components/search-bar/search-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideBell,
  lucideCalendar,
  lucideCheckCheck,
  lucideCircleCheck,
  lucideCircleX,
  lucideClock,
  lucideMenu,
  lucideTrendingDown,
  lucideTrendingUp,
  lucideTrendingUpDown,
} from '@ng-icons/lucide';
import { MatCardModule } from '@angular/material/card';
import { stats } from '../../constant/constant';
import { ChartComp } from '../../shared/components/chart-comp/chart-comp';
import { RecentActivity } from '../../shared/components/recent-activity/recent-activity';
import { QuickActions } from "../../shared/components/quick-actions/quick-actions";

@Component({
  selector: 'app-dashboard',
  imports: [
    MatButtonModule,
    MatIconModule,
    NgIcon,
    MatCardModule,
    ChartComp,
    RecentActivity,
    QuickActions
],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  viewProviders: [
    provideIcons({
      lucideBell,
      lucideMenu,
      lucideCalendar,
      lucideTrendingUp,
      lucideTrendingDown,
      lucideClock,
      lucideCircleCheck,
      lucideCircleX,
    }),
  ],
})
export class Dashboard {
  stats = stats;
}
