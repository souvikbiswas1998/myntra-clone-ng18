import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'grocery',
        loadComponent: () =>
            loadRemoteModule('grocery', './Component').then((m) => m.AppComponent),
    },
];
