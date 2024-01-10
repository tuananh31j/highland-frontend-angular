import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { TableComponent } from '~/app/components/table/table.component';
import { ProductKey } from '~/app/constants';
import { ProductService } from '~/app/service/product/product.service';
import { IProduct } from '~/app/types/product';

@Component({
    selector: 'app-product-list',
    standalone: true,
    providers: [ProductService],
    imports: [CommonModule, TableComponent, HttpClientModule],
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss',
})
export class ProductListComponent implements OnInit {
    proKey: any;
    products: IProduct[];

    constructor(private productService: ProductService) {
        this.proKey = ProductKey;
        this.products = [];
    }

    ngOnInit(): void {
        this.productService.getProductList().subscribe((data) => {
            this.products = data;
            console.log(data);
        });
    }
}
