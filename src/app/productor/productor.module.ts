import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductorRoutingModule } from './productor-routing.module';
import { ProductorComponent } from './components/productor.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ProductorComponent],
  imports: [CommonModule, ProductorRoutingModule, MaterialModule],
  exports: []
})
export class ProductorModule {}
