import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { FaqComponent } from './faq/faq.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { TransactionComponent } from './transaction/transaction.component';
import { WalletConnectComponent } from './wallet-connect/wallet-connect.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'transactions', component: TransactionComponent},
  {path: 'authors', component: AuthorsComponent},
  {path: 'help', component: HelpCenterComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'wallet', component: WalletConnectComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'createItem', component: CreateItemComponent},
  {path: 'profileDetails', component: ProfileDetailsComponent},
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
