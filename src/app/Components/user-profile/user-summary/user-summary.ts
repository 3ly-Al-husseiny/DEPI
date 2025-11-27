import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileService } from '../../../services/user-profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-summary.html',
  styleUrls: ['./user-summary.css']
})
export class UserSummaryComponent implements OnInit, OnDestroy {
  userName: string = '';
  userEmail: string = '';
  userPhoto: string = '';
  private profileSubscription?: Subscription;

  constructor(private userProfileService: UserProfileService) {}

  ngOnInit(): void {
    this.profileSubscription = this.userProfileService.profile$.subscribe(profile => {
      this.userName = profile.name;
      this.userEmail = profile.email || '';
      this.userPhoto = profile.photo;
    });
  }

  ngOnDestroy(): void {
    if (this.profileSubscription) {
      this.profileSubscription.unsubscribe();
    }
  }
}