import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';//pour gerer les requetes http
import { AppRoutingModule } from './app-routing.module';//pour gerer les formulaires
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { AuthorsComponent } from './authors/authors.component';
import { CategoryComponent } from './category/category.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OperationComponent } from './operation/operation.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { SignupComponent } from './signup/signup.component';
import { TransactionComponent } from './transaction/transaction.component';
import { WalletConnectComponent } from './wallet-connect/wallet-connect.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnnonceComponent,
    AuthorsComponent,
    CategoryComponent,
    ContactUsComponent,
    CreateItemComponent,
    BoardAdminComponent,
    BoardUserComponent,
    FaqComponent,
    FooterComponent,
    HelpCenterComponent,
    HomeComponent,
    LoginComponent,
    OperationComponent,
    ProductComponent,
    ProfileComponent,
    ProfileDetailsComponent,
    SignupComponent,
    TransactionComponent,
    WalletConnectComponent,
    BoardAdminComponent,
    BoardUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
