import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { productsList, productCart, wishList } from '../DB/productsDB';
import { ProductsListType, WishListType } from '../Types/productDBTypes';
import { MainPageComponent } from './main-page/main-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wis-software_test-task';
}
