import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBuilding2 } from '@ng-icons/lucide';

@Component({
  selector: 'app-add-job',
  viewProviders: [
    provideIcons({
      lucideBuilding2,
    }),
    provideNativeDateAdapter(),
  ],
  templateUrl: './add-job.html',
  styleUrl: './add-job.css',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    //MatNativeDateModule,
    ReactiveFormsModule,
    NgIcon,
  ],
})
export class AddJob {
  jobForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.jobForm = this.fb.group({
      company: [''],
      position: [''],
      location: [''],
      salary: [''],
      applicationDate: [''],
      status: ['applied'],
      jobType: ['full-time'],
      description: [''],
      notes: [''],
    });
  }

  onSaveAsDraft(): void {
    console.log('Saved as draft:', this.jobForm.value);
  }

  onAddApplication(): void {
    console.log('Job application added:', this.jobForm.value);
  }
  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      // this.resumeFileName = file.name;
      // this.uploadDate = `uploaded ${this.getDaysAgo()} days ago`;
    }
  }

  triggerFileInput(): void {
    //this.fileInput.nativeElement.click();
  }
}
