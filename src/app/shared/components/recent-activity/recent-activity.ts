import { Component } from '@angular/core';
import { activities } from '../../../constant/constant';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideBuilding2,
  lucideCalendar,
  lucideMapPin,
} from '@ng-icons/lucide';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-recent-activity',
  imports: [NgIcon, MatBadgeModule],
  viewProviders: [
    provideIcons({
      lucideCalendar,
      lucideMapPin,
      lucideBuilding2,
    }),
  ],
  templateUrl: './recent-activity.html',
  styleUrl: './recent-activity.css',
})
export class RecentActivity {
  recentActivitysList = activities;
}
