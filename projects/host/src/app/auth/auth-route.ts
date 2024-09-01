import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { authenticatedGuard } from './guards/authenticated-guard/authenticated.guard';

export const authRoutes: Routes = [
    {
        path: '',
        canActivate: [authenticatedGuard],
        component: AuthComponent, children: [
            {
                path: 'sign-up',
                loadComponent: () => import('./components/sign-up/sign-up.component').then(c => c.SignUpComponent)
            },
            {
                path: 'login',
                loadComponent: () => import('./components/login/login.component').then(c => c.LoginComponent),
            },
            {
                path: 'reset-password',
                loadComponent: () => import('./components/reset-password/reset-password.component').then(c => c.ResetPasswordComponent)
            }
        ]
    }

];