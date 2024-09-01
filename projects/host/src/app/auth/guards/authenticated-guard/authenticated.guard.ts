import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { inject } from '@angular/core';

export const authenticatedGuard: CanActivateFn = (route, state) => {
  let authService: AuthService = inject(AuthService)
  let router: Router = inject(Router)
  if (authService.isAuthenticated()) {
    // User is already authenticated, redirect to a protected route or home page
    router.navigate(['/grocery']); // Replace '/home' with your desired protected route
    return false; // Prevent navigation to the login page
  } else {
    // User is not authenticated, allow navigation to the login page
    return true;
  }
};
