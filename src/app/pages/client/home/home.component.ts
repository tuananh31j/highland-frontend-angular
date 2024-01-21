import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductItemComponent } from '~/app/components/product/item/item.component';
import { ProductService } from '~/app/service/product/product.service';
import { IProduct } from '~/app/types/Product';

@Component({
    selector: 'app-home',
    standalone: true,
    providers: [ProductService],
    imports: [CommonModule, ProductItemComponent, HttpClientModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
    products: IProduct[];
    constructor(private productService: ProductService) {
        this.products = [];
    }
    ngOnInit(): void {
        this.productService.getProductList().subscribe((data) => {
            this.products = data;
        });
    }
}
