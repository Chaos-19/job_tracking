import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { map, delay } from 'rxjs/operators';

export interface Profile {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  location?: string;
  bio?: string;
  skills?: string[]; // canonical split of skills
  avatarUrl?: string; // remote URL
  resumeFilename?: string;
  resumeUrl?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  // Replace with your real API endpoints
  private readonly base = '/api/profile';

  constructor(private http: HttpClient) {}

  // Fetches profile
  getProfile(): Observable<Profile> {
    // Example: return this.http.get<Profile>(`${this.base}/me`);
    // For demo / fallback return mock
    const mock: Profile = {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      bio: 'Passionate frontend developer with 5+ years...',
      skills: ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker'],
      avatarUrl: '',
      resumeFilename: 'john-doe-resume.pdf',
      resumeUrl: '',
    };
    return of(mock).pipe(delay(300)); // simulate network
  }

  // Save (create/update) the profile
  saveProfile(profile: Profile): Observable<Profile> {
    // Example: return this.http.put<Profile>(`${this.base}/me`, profile);
    return of({ ...profile }).pipe(delay(300));
  }

  // Upload avatar (file) -> returns URL
  uploadAvatar(file: File): Observable<string> {
    // Example with FormData:
    // const fd = new FormData(); fd.append('avatar', file);
    // return this.http.post<{url:string}>(`${this.base}/avatar`, fd).pipe(map(r => r.url));
    // For demo return object URL (NOT for production)
    return of(URL.createObjectURL(file)).pipe(delay(200));
  }

  // Upload resume (file) -> returns filename + URL
  uploadResume(file: File): Observable<{ filename: string; url?: string }> {
    // Real implementation: upload to server and return file metadata
    return of({ filename: file.name, url: URL.createObjectURL(file) }).pipe(
      delay(300)
    );
  }
}
