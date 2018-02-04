import { Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PaymentsComponent} from './payments/payments.component';

export const ROUTES: Routes = [
    {path:'', component: HomeComponent},
    {path:'payments', component: PaymentsComponent}

];