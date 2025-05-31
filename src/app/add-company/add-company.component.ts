import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {
  addCompanyForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddCompanyComponent>
  ) {}

  ngOnInit(): void {
    this.addCompanyForm = this.fb.group({
      company: ['', Validators.required],
      jobLink: ['', Validators.required],
      jobId: [''],
      applied: [false],
      referred: [false],
      who: ['']
    });
  }

  onSubmit(): void {
    if (this.addCompanyForm.valid) {
      this.dialogRef.close(this.addCompanyForm.value);
    }
  }
}
