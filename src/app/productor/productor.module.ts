import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductorRoutingModule } from './productor-routing.module';
import { ProductorComponent } from './components/productor.component';
import { MaterialModule } from '../material/material.module';
import { CreateProductorComponent } from './components/create-productor/create-productor.component';

@NgModule({
  declarations: [
    ProductorComponent,
    CreateProductorComponent,
  ],
  imports: [
    CommonModule,
    ProductorRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [],
})
export class ProductorModule {}
