import { Location, NgOptimizedImage } from '@angular/common';
import {
  Component,
  inject,
  input,
  InputSignal,
  ResourceRef,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import type { Product } from '@interfaces/product.interface';
import { ProductService } from '@services/product.service';

@Component({
  selector: 'app-product-detail',
  imports: [NgOptimizedImage],
  templateUrl: './product-detail.html',
})
export default class ProductDetail {
  private readonly location: Location = inject(Location);
  private readonly productService: ProductService = inject(ProductService);
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  //! Otra forma de leer el id en la url
  // public id: InputSignal<number> = input.required<number>();

  // public productResource: ResourceRef<Product | undefined> = rxResource({
  //   request: (): { id: number } => ({
  //     id: this.id(),
  //   }),
  //   loader: ({ request }) => this.productService.getProduct(request.id),
  // });

  //! Leer id de la url con el activatedRoute
  public id: number = this.activatedRoute.snapshot.params['id'];
  productResource: ResourceRef<Product | undefined> = rxResource({
    request: (): { id: number } => ({ id: this.id }),
    loader: ({ request }) => {
      return this.productService.getProduct(request.id);
    },
  });

  public goBack(): void {
    this.location.back();
  }
}
