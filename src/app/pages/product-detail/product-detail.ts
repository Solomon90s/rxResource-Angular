import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
})
export class ProductDetail {
  private readonly location: Location = inject(Location);

  public goBack(): void {
    this.location.back();
  }
}
