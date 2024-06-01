import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../../models/prodcut.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!: IProduct;
  @Output() handleAdd = new EventEmitter();
  constructor() {}
  ngOnInIt() {}

  addToCart(product: IProduct) {
    this.handleAdd.emit(product);
  }
}
