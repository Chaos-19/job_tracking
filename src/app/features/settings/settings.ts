import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

// Import Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // Add Material modules to the imports array
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatListModule,
    MatDividerModule,
  ],
  templateUrl: './settings.html',
  styleUrls: ['./settings.css'],
})
export class Settings {
  settingsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.settingsForm = this.fb.group({
      profile: this.fb.group({
        firstName: ['John'],
        lastName: ['Doe'],
        email: ['john.doe@example.com'],
        phone: ['+1 (555) 123-4567'],
        location: ['San Francisco, CA'],
      }),
      security: this.fb.group({
        currentPassword: [''],
        newPassword: [''],
        confirmNewPassword: [''],
      }),
      notifications: this.fb.group({
        emailNotifications: [true],
        interviewReminders: [true],
        applicationDeadlines: [false],
        weeklySummary: [true],
      }),
      social: this.fb.group({
        linkedin: ['https://linkedin.com/in/johndoe'],
        github: ['https://github.com/johndoe'],
      }),
    });
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      console.log('Selected file:', file.name);
      // Handle file upload logic
    }
  }

  triggerFileUpload(): void {
    document.getElementById('photo-upload')?.click();
  }

  saveChanges(): void {
    if (this.settingsForm.valid) {
      console.log('Form Submitted!', this.settingsForm.value);
      // Handle form submission to the server
    }
  }
}
