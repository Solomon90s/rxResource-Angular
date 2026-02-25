import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { Product } from '@interfaces/product.interface';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly http: HttpClient = inject(HttpClient);

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.baseUrl}/products`);
  }

  public getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.baseUrl}/products/${id}`);
  }
}
