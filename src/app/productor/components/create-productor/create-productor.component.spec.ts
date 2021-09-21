import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductorComponent } from './create-productor.component';

describe('CreateProductorComponent', () => {
  let component: CreateProductorComponent;
  let fixture: ComponentFixture<CreateProductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProductorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
