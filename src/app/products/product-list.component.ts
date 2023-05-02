import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string = '';
  sub!: Subscription;

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

  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

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
    this.sub = this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}

//Async operation:
//1st: Angular initialises component in ngOnInit
//2nd: We call getProducts() from the productService.ts
//3rd: The productService.ts returns an observable of type IProduct[]
//4th: We substribe to that observable (inside ngOnInit) and the HTTP GET request is submitted
//Asyn operation ends here
//5th: We set filterProducts in this.filteredProducts. But at this point, since we haven't received a response, the filteredProducts is an empty array.
//At a future point in time:
//1st: The service receives the HTTP response from our request: The response data is mapped to an array of products
//2nd: The response is piped (you can see that in product.service.ts) through any operators, (in our example: tap and catchError) and the observable emits that mapped data to any subscriber.
//3rd: Our subscriber (ngOnInit in product-list.component.ts) receives the emitted data and
//4thL assigns our product property to the emitted array of products.
