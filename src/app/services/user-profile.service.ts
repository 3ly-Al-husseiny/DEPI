import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface UserProfile {
  name: string;
  age: number;
  gender: string;
  photo: string;
  email: string;
  password: string;
  weight: number; // in kg
  height: number; // in cm
}

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private readonly STORAGE_KEY = 'userProfile';
  
  private defaultProfile: UserProfile = {
    name: 'John Doe',
    age: 25,
    gender: 'male',
    photo: 'https://ui-avatars.com/api/?name=John+Doe&size=200&background=2d5f3f&color=e8f5e9&bold=true',
    email: 'john@example.com',
    password: 'password123',
    weight: 70,
    height: 175
  };

  private profileSubject: BehaviorSubject<UserProfile>;
  public profile$: Observable<UserProfile>;

  constructor() {
    const savedProfile = this.loadFromStorage();
    this.profileSubject = new BehaviorSubject<UserProfile>(savedProfile || this.defaultProfile);
    this.profile$ = this.profileSubject.asObservable();
  }

  getProfile(): UserProfile {
    return this.profileSubject.value;
  }

  updateProfile(profile: UserProfile): void {
    this.profileSubject.next(profile);
    this.saveToStorage(profile);
  }

  calculateBMI(weight: number, height: number): number {
    // BMI = weight (kg) / (height (m))^2
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return Math.round(bmi * 10) / 10; // Round to 1 decimal place
  }

  getBMICategory(bmi: number): string {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  }

  private loadFromStorage(): UserProfile | null {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Error parsing saved profile:', e);
          return null;
        }
      }
    }
    return null;
  }

  private saveToStorage(profile: UserProfile): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(profile));
    }
  }
}
