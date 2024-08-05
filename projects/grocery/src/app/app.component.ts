import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
// import { CommonLibsComponent, CommonLibsService } from 'common-libs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, MatInputModule, CommonModule],
  // providers: [CommonLibsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'grocery';
  formGroup: FormGroup = this.fb.group({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(undefined, [Validators.required]),
  });
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    // private _snackBar: MatSnackBar,
    // public dialog: MatDialog
  ) { }

  ngOnInit(): void { }

  login() {
    if (this.formGroup.valid) {
      this.loading = true;
    } else {
      this.formGroup.markAllAsTouched();
    }
  }

  openSnackBar(message: string, action: string = 'Cancel') {
  }

  openDialog() {

  }
}
