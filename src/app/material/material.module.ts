import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [CommonModule, MatSelectModule, MatOptionModule, MatFormFieldModule, ],
  exports: [MatSelectModule, MatOptionModule, MatFormFieldModule],
})
export class MaterialModule {}
