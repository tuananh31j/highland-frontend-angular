import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductRowComponent } from '~/app/pages/admin/product/list/row/row.component';
import { TableComponent } from '~/app/components/table/table.component';
import { ProductKey } from '~/app/constants';
import { ProductService } from '~/app/service/product/product.service';
import { IProduct } from '~/app/types/Product';

import swal from 'sweetalert';

@Component({
    selector: 'app-product-list',
    standalone: true,
    providers: [ProductService],
    imports: [
        CommonModule,
        TableComponent,
        HttpClientModule,
        ProductRowComponent,
    ],
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss',
})
export class ProductListComponent implements OnInit {
    productHeader: { name: string; list: string[] };
    products: IProduct[];

    constructor(private productService: ProductService) {
        this.productHeader = ProductKey;
        this.products = [];
    }
    onDelete(id: any) {
        swal({
            title: 'Bạn có chắc muốn xóa sản phẩm này không?',
            icon: 'warning',
            buttons: ['Hủy', 'Đồng ý'],
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                this.productService.removeProduct(id).subscribe((data) => {
                    const refreshProduct = this.products.filter(
                        (item) => item._id !== id
                    );
                    this.products = refreshProduct;
                });
            }
        });
    }

    ngOnInit(): void {
        this.productService.getProductList().subscribe((data) => {
            this.products = data;
            console.log(data);
        });
    }
}
