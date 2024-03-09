import { Routes } from '@angular/router';
import { MainHomeComponent } from './main-home/main-home.component';


export const MAIN_ROUTES: Routes = [
    { path: '', component: MainHomeComponent },
    { path: 'home', component: MainHomeComponent }
];
