import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-admin-layout',
    standalone: true,
    imports: [CommonModule, RouterOutlet, SidebarComponent, HttpClientModule],
    templateUrl: './admin-layout.component.html',
    styleUrl: './admin-layout.component.scss',
})
export class AdminLayoutComponent {}
