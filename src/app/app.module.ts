import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { CovertoSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star-component/star.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CovertoSpacesPipe,
    StarComponent,
  ], //Our components, directives and pipes are declared here
  imports: [BrowserModule, AppRoutingModule, FormsModule], //Components, directived and pipes from other sources(external modules) are imported here
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
