import { Routes } from '@angular/router';
import { HomepageComponent } from './core/modules/home/pages/homepage/homepage.component';
import { ProductspageComponent } from './core/modules/products/pages/productspage/productspage.component';
import { CreateproductComponent } from './core/modules/admin/pages/createproduct/createproduct.component';
import { NotFoundComponent } from './core/modules/error/pages/not-found/not-found.component';
import { EditproductComponent } from './core/modules/admin/pages/editproduct/editproduct.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'products',
    component: ProductspageComponent,
  },
  {
    path: 'admin/create-product',
    component: CreateproductComponent,
  },
  {
    path: 'admin/edit-product/:id',
    component: EditproductComponent,
  },
  { 
    path: '**', 
    component: NotFoundComponent, 
  },
];
