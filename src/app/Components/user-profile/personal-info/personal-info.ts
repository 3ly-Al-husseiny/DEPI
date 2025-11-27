import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileService } from '../../../services/user-profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal-info.html',
  styleUrls: ['./personal-info.css']
})
export class PersonalInfoComponent implements OnInit, OnDestroy {
  userAge: number = 0;
  userGender: string = '';
  userWeight: number = 0;
  userHeight: number = 0;
  userBMI: number = 0;
  bmiCategory: string = '';
  private profileSubscription?: Subscription;

  constructor(private userProfileService: UserProfileService) {}

  ngOnInit(): void {
    this.profileSubscription = this.userProfileService.profile$.subscribe(profile => {
      this.userAge = profile.age;
      this.userGender = this.capitalizeGender(profile.gender);
      this.userWeight = profile.weight;
      this.userHeight = profile.height;
      
      // Calculate BMI
      this.userBMI = this.userProfileService.calculateBMI(profile.weight, profile.height);
      this.bmiCategory = this.userProfileService.getBMICategory(this.userBMI);
    });
  }

  ngOnDestroy(): void {
    if (this.profileSubscription) {
      this.profileSubscription.unsubscribe();
    }
  }

  private capitalizeGender(gender: string): string {
    if (!gender) return '';
    return gender.charAt(0).toUpperCase() + gender.slice(1);
  }
}