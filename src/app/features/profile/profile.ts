/* // profile-page.component.ts
import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrls: ['./profile.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatChipsModule,
  ],
})
export class Profile {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  profileForm: FormGroup;
  resumeFileName: string | null = 'john-doe-resume.pdf';
  uploadDate: string | null = 'uploaded 2 days ago';

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['John'],
      lastName: ['Doe'],
      email: ['john.doe@example.com'],
      phone: ['+1-555-123-4567'],
      location: ['San Francisco, CA'],
      bio: [
        'Experienced frontend developer with a passion for building scalable web applications.',
      ],
      skills: ['React, TypeScript, Node.js'],
    });
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.resumeFileName = file.name;
      this.uploadDate = `uploaded ${this.getDaysAgo()} days ago`;
    }
  }

  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }

  getDaysAgo(): number {
    return Math.floor(Math.random() * 7) + 1; // Random days ago for demo
  }

  onSave(): void {
    console.log('Form saved:', this.profileForm.value);
  }

  onCancel(): void {
    this.profileForm.reset({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1-555-123-4567',
      location: 'San Francisco, CA',
      bio: 'Experienced frontend developer with a passion for building scalable web applications.',
      skills: 'React, TypeScript, Node.js',
    });
  }
}
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

// Import Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-profile',
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
    MatChipsModule,
    MatDividerModule,
  ],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css'],
})
export class Profile {
  profileForm: FormGroup;
  uploadedFileName: string | null = 'john-doe-resume.pdf';
  uploadedFileDate: string = 'Uploaded 2 days ago';

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['John'],
      lastName: ['Doe'],
      email: ['john@example.com'],
      phone: ['+1 (555) 123-4567'],
      location: ['San Francisco, CA'],
      bio: [
        'Passionate frontend developer with 5+ years of experience building modern web applications. Specialized in React, TypeScript, and creating exceptional user experiences.',
      ],
      skills: ['React, TypeScript, Node.js, Python, AWS, Docker'],
    });
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.uploadedFileName = file.name;
      this.uploadedFileDate = `Uploaded today`;
      console.log('Selected file:', file);
      // Here, you would typically handle the file upload to a server.
    }
  }

  triggerFileUpload(): void {
    document.getElementById('resume-upload-input')?.click();
  }

  saveChanges(): void {
    if (this.profileForm.valid) {
      console.log('Saving changes:', this.profileForm.value);
      // Add logic to send data to the server.
    }
  }
}
