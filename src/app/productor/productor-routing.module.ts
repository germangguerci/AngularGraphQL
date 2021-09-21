import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductorComponent } from './components/create-productor/create-productor.component';
import { ProductorComponent } from './components/productor.component';

const routes: Routes = [
  {
    path: '',
    component: ProductorComponent,
  },
  {
    path: 'create',
    component: CreateProductorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductorRoutingModule {}
