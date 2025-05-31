import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCompanyComponent } from './add-company/add-company.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'job-tracker';

  constructor(private dialog: MatDialog) {}

  openAddCompanyDialog() {
    this.dialog.open(AddCompanyComponent);
  }
}
