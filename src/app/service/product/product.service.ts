import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '~/app/types/product';
import { environment } from '~/environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private http: HttpClient) {}

    getProductList(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(environment.product);
    }
}
