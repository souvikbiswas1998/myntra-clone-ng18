import { NgOptimizedImage, provideImgixLoader } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage],
  providers: [provideImgixLoader("http://localhost:4200/assets/login-signup.webp"),],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

}
