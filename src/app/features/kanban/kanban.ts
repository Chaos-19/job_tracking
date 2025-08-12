import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { DragDropModule } from '@angular/cdk/drag-drop';

interface JobCard {
  id: string;
  title: string;
  company: string;
  location: string;
  applicationDate: Date;
  salary: string;
  typeIcon: string;
  columnId: string;
}

interface Column {
  id: string;
  title: string;
  color: string;
}

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.html',
  styleUrl: './kanban.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, MatMenuModule, DragDropModule],
})
export class Kanban implements OnInit {
  columns: Column[] = [
    { id: 'applied', title: 'Applied', color: '#3498db' },
    { id: 'interview', title: 'Interview Scheduled', color: '#16a085' },
    { id: 'offer', title: 'Offer Received', color: '#27ae60' },
    { id: 'rejected', title: 'Rejected', color: '#e74c3c' },
  ];

  jobs: JobCard[] = [
    {
      id: '1',
      title: 'Frontend Developer',
      company: 'Tech Corp',
      location: 'New York, NY',
      applicationDate: new Date(),
      salary: '$90,000 - $120,000',
      typeIcon: 'fas fa-laptop-code',
      columnId: 'applied',
    },
    {
      id: '2',
      title: 'UI/UX Designer',
      company: 'Design Studio',
      location: 'San Francisco, CA',
      applicationDate: new Date(),
      salary: '$85,000 - $110,000',
      typeIcon: 'fas fa-paint-brush',
      columnId: 'interview',
    },
  ];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadFromLocalStorage();
  }

  getColumnJobs(columnId: string): JobCard[] {
    return this.jobs.filter((job) => job.columnId === columnId);
  }

  onDrop(event: CdkDragDrop<JobCard[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      const jobId = event.container.data[event.currentIndex].id;
      const job = this.jobs.find((j) => j.id === jobId);
      if (job) {
        job.columnId = event.container.id;
        this.saveToLocalStorage();
      }
    }
  }

  openAddJobModal(columnId?: string): void {
    // Implementation for add job modal
  }

  editJob(job: JobCard): void {
    // Implementation for edit job
  }

  deleteJob(job: JobCard): void {
    this.jobs = this.jobs.filter((j) => j.id !== job.id);
    this.saveToLocalStorage();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('kanban-jobs', JSON.stringify(this.jobs));
  }

  private loadFromLocalStorage(): void {
    const savedJobs = localStorage.getItem('kanban-jobs');
    if (savedJobs) {
      this.jobs = JSON.parse(savedJobs);
    }
  }
}
