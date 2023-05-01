import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];

  products: IProduct[] = [
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

  performFilter(filteredBy: string): IProduct[] {
    filteredBy = filteredBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filteredBy)
    );
  }

  displayImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.listFilter = 'cart';
  }
}
