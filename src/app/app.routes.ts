import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/client/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductListComponent } from './pages/admin/product/list/list.component';
import { ProductDetailsComponent } from './pages/client/product-details/product-details.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: 'contact',
                component: HomeComponent,
            },
            {
                path: 'product/:id',
                component: ProductDetailsComponent,
            },
        ],
    },
    {
        path: 'admin',
        component: AdminLayoutComponent,
        children: [{ path: 'product', component: ProductListComponent }],
    },

    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];
