import { Component, DestroyRef } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { MessageService } from 'primeng/api';
import { CommonService } from '../../../shared/services/common.service';
import { Authentication, AuthenticationForm, LoginApiResponse } from '../../interface/auth-interface';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule, FloatLabelModule, ButtonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [CommonService, AuthService, MessageService]
})
export class LoginComponent {

  loginForm!: FormGroup<AuthenticationForm>

  constructor(private authService: AuthService,
    private destroyRef: DestroyRef, public commonService: CommonService, private messageService: MessageService,
    private router: Router) { }

  ngOnInit(): void {
    this.setForm()
  }

  private setForm(): void {
    this.loginForm = new FormGroup<AuthenticationForm>({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(8), Validators.maxLength(20),
      Validators.required]),
    })
  }

  onSubmit(loginFormData: Authentication): void {
    if (this.loginForm.valid) {
      this.authService.loginWithEmailAndPassword((loginFormData.email as string), (loginFormData.password as string))
        .pipe(takeUntilDestroyed(this.destroyRef)).subscribe(async (res: LoginApiResponse) => {
          localStorage.setItem('token', res['token'])
          this.router.navigate(["/grocery"]);
        }, (err: { error: { errMsg: any; data: { message: any; }; }; }) => {
          this.commonService.showError(err.error.errMsg, err.error?.data?.message)
        })
    }
    else {
      if (this.loginForm.controls.email?.errors) this.commonService.showError('Email', 'Either Empty or Invalid')
      if (this.loginForm.controls.password?.errors) this.commonService.showError('Password', 'Either Empty or Invalid')
    }
  }

}
