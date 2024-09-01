import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { authGuard } from './auth/guards/auth.guard';

export const routes: Routes = [
    {
        path: 'grocery',
        loadComponent: () =>
            loadRemoteModule('grocery', './Component').then((m) => m.AppComponent),
        canActivate: [authGuard]
    },

    {
        path: 'auth',
        loadChildren: () => import('./auth/auth-route').then(c => c.authRoutes),
        
    }
];
