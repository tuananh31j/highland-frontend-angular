import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-main-layout',
    standalone: true,
    imports: [CommonModule, HeaderComponent, FooterComponent, RouterOutlet],
    templateUrl: './main-layout.component.html',
    styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {}
