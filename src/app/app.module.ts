import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
<<<<<<< HEAD
import {HttpClientModule } from '@angular/common/http';
import {MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { DatePipe } from '@angular/common';

=======
>>>>>>> parent of 845fb2f (finalizado)




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerComponent } from './customer/customer.component';
<<<<<<< HEAD
import { CustomerService } from './service/customer.service';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './service/category.service';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductService } from './service/product.service';
import { ProductComponent } from './product/product.component';

=======
import { CustomerService } from './customer.service';
>>>>>>> parent of 845fb2f (finalizado)

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    CustomerComponent,
    CategoryComponent,
    ProductComponent,
    CreateCustomerComponent,
    CreateProductComponent,
<<<<<<< HEAD
    CreateCategoryComponent,
    MenubarComponent
=======
    CustomerComponent
>>>>>>> parent of 845fb2f (finalizado)
=======
    CreateCategoryComponent
>>>>>>> parent of 475b7d6 (projetonovo)
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDividerModule,
    MatToolbarModule,
    MatInputModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    MatMenuModule
=======
    BrowserAnimationsModule
>>>>>>> parent of 845fb2f (finalizado)
=======
    BrowserAnimationsModule
>>>>>>> parent of 475b7d6 (projetonovo)
  ],
  providers: [
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
