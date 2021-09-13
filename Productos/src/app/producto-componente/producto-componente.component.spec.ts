import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoComponenteComponent } from './producto-componente.component';

describe('ProductoComponenteComponent', () => {
  let component: ProductoComponenteComponent;
  let fixture: ComponentFixture<ProductoComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
