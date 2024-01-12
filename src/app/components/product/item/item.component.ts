import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-product-item',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './item.component.html',
    styleUrl: './item.component.scss',
})
export class ProductItemComponent {
    @Input() item: any;
}
