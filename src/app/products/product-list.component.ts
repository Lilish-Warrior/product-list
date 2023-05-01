import { Component } from '@angular/core';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = 'cart';
  products: any[] = [
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
  ];

  displayImage(): void {
    this.showImage = !this.showImage;
  }
}
