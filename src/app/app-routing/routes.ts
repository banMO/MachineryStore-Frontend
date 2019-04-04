import {Routes} from '@angular/router';

import {CatalogComponent} from '../catalog/catalog.component';
import {HomeComponent} from '../home/home.component';
import {ContactComponent} from '../contact/contact.component';
import {ItemDetailComponent} from '../item-detail/item-detail.component';
import {AboutComponent} from '../about/about.component';
import {ProductFormComponent} from '../product-form/product-form.component';
import {MachineriesComponent} from '../machineries/machineries.component';
import {MachineriesListComponent} from '../machineries-list/machineries-list.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'contactus', component: ContactComponent},
  {path: 'aboutus', component: AboutComponent},
  {path: 'itemdetail/:id', component: ItemDetailComponent},
  {path: 'product', component: ProductFormComponent},
  {path: 'machineries', component: MachineriesComponent},
  {path: 'list', component: MachineriesListComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
