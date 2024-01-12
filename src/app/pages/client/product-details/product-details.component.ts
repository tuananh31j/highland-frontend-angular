import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '~/app/service/product/product.service';
import { IProduct } from '~/app/types/product';

@Component({
    selector: 'app-product-details',
    standalone: true,
    providers: [ProductService],
    imports: [HttpClientModule],
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
    details: Partial<IProduct>;
    constructor(
        private productService: ProductService,
        private route: ActivatedRoute
    ) {
        this.details = {};
    }

    ngOnInit(): void {
        const id = this.route.snapshot.params['id'];
        this.productService.getProductDetails(id).subscribe((data) => {
            this.details = data;
        });
    }
}
