import { Component } from '@angular/core';
import { wishList, productCart } from '../../../DB/productsDB';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatBadgeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  wishListLength = wishList.length;
  productCartLength = productCart.length;
  productCartItemsPrice = productCart.reduce((accum, item) => accum += item.price, 0)
}
