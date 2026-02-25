import { Component, inject, ResourceRef } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '@interfaces/product.interface';
import { ProductService } from '@services/product.service';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.html',
})
export class HomePage {
  private readonly productService: ProductService = inject(ProductService);

  productResource: ResourceRef<Product[] | undefined> = rxResource({
    loader: (): Observable<Product[]> => this.productService.getProducts(),
  });
}
