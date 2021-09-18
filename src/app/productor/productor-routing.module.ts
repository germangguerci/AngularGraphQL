import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductorComponent } from './components/productor.component';

const routes: Routes = [
  {
    path: '',
    component: ProductorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductorRoutingModule {}
