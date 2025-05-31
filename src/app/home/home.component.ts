import { Component } from '@angular/core';

interface JobApplication {
  company: string;
  position: string;
  appliedStatus: string;
  referralStatus: string;
  interviewDate: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  displayedColumns: string[] = [
    'company',
    'position',
    'appliedStatus',
    'referralStatus',
    'interviewDate'
  ];

  dataSource: JobApplication[] = [
    {
      company: 'Google',
      position: 'Software Engineer',
      appliedStatus: 'Applied',
      referralStatus: 'No Referral',
      interviewDate: '2025-06-10'
    },
    {
      company: 'Microsoft',
      position: 'Frontend Developer',
      appliedStatus: 'Interview Scheduled',
      referralStatus: 'Referred',
      interviewDate: '2025-06-15'
    },
    {
      company: 'Amazon',
      position: 'Backend Developer',
      appliedStatus: 'Rejected',
      referralStatus: 'No Referral',
      interviewDate: '-'
    }
  ];
}
