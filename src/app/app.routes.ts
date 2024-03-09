import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./main/main-home.routes').then(m => m.MAIN_ROUTES)
    }
];
