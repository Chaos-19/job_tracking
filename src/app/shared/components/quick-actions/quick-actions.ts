import { Component } from '@angular/core';
import { quickActions } from '../../../constant/constant';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-quick-actions',
  imports: [MatCardModule],
  templateUrl: './quick-actions.html',
  styleUrl: './quick-actions.css',
})
export class QuickActions {
  quickActions = quickActions;
}
