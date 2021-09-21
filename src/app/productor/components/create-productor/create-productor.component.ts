import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductorService } from '../productor.service';

@Component({
  selector: 'app-create-productor',
  templateUrl: './create-productor.component.html',
  styleUrls: ['./create-productor.component.scss'],
})
export class CreateProductorComponent {
  constructor(
    private productorService: ProductorService,
    private fb: FormBuilder
  ) {}

  /* productorForm = new FormGroup({
    nombre: new FormControl(''),
    localidad: new FormControl(''),
    descripcionBreve: new FormControl(''),
  }); */

  productorForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(4)]],
    localidad: [''],
    descripcionBreve: [''],
  });

  onSubmit() {
    this.productorService.createProductor(this.productorForm.value);
  }
}
