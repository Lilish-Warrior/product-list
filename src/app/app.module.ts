import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { CovertoSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star-component/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CovertoSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
  ], //Our components, directives and pipes are declared here
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ], //Components, directived and pipes from other sources(external modules) are imported here
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
