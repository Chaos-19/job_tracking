import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Sidebar } from './layouts/sidebar/sidebar';
import { MainLayout } from "./layouts/main-layout/main-layout";

//RouterOutlet,
@Component({
  selector: 'app-root',
  imports: [MatSlideToggleModule, MainLayout],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('myapp');
}
