import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-product-row',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './row.component.html',
    styleUrl: './row.component.scss',
})
export class ProductRowComponent {
    @Input() productList: any;
}
