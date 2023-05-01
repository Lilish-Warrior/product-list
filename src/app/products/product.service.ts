import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): IProduct[] {
    return [
      {
        productId: 2,
        productName: 'Garden Cart',
        productCode: 'GDN-0023',
        releaseDate: 'March 18, 2023',
        description: ' Rolling garden cart',
        price: 32.99,
        starRating: 4.2,
        imageURL: 'assets/images/garden_cart.png',
      },
      {
        productId: 5,
        productName: 'Hammer',
        productCode: 'TBX-0498',
        releaseDate: 'May 21, 2021',
        description: ' Curved Hammer',
        price: 8.9,
        starRating: 4.8,
        imageURL: 'assets/images/hammer.png',
      },
      {
        productId: 4,
        productName: 'Piano',
        productCode: 'CFR-0689',
        releaseDate: 'May 28, 2019',
        description: ' Great Piano',
        price: 90.5,
        starRating: 4.9,
        imageURL: 'assets/images/piano.png',
      },
    ];
  }
}
