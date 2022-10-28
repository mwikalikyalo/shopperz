import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router
import { ElectronicsComponent } from './electronics/electronics.component';
import { FashionComponent } from './fashion/fashion.component';
import { FooterComponent } from './footer/footer.component';
import { HomeProductsComponent } from './home-products/home-products.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignUpComponent } from './sign-up/sign-up.component';

// sets up routes constant where you define your routes
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'electronics', component: ElectronicsComponent },
  { path: 'homeproducts', component: HomeProductsComponent },
  { path: 'fashion', component: FashionComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  

];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
