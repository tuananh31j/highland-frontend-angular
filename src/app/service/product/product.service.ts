import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '~/app/types/Product';
import { environment } from '~/environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    authtoken: string | null;
    constructor(private http: HttpClient) {
        this.authtoken = localStorage.getItem('token');
    }

    getProductList(): Observable<IProduct[]> {
        // const headers = { Authorization: `Bearer ${this.authtoken}` };
        return this.http.get<IProduct[]>(environment.product);
    }
    getProductDetails(id: string): Observable<IProduct> {
        return this.http.get<IProduct>(`${environment.product}/${id}`);
    }
    removeProduct(id: string): Observable<string> {
        const headers = { Authorization: `Bearer ${this.authtoken}` };
        return this.http.delete<string>(`${environment.product}/${id}`, {
            headers,
        });
    }
}
