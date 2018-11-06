import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './layouts/blog/blog.component';
import { CoachingComponent } from './layouts/coaching/coaching.component';
import { EventComponent } from './layouts/event/event.component';
import { FormationComponent } from './layouts/formation/formation.component';
import { HomeComponent } from './layouts/home/home.component';
import { ShopComponent } from './layouts/shop/shop.component';
import { LoginComponent } from './layouts/login/login.component';
import { UserComponent } from './layouts/user/user.component';
import { SignupComponent } from './layouts/signup/signup.component';
import { ProductDetailsComponent } from './components/Shop/product-details/product-details.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'coaching', component: CoachingComponent },
  { path: 'event', component: EventComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'formation', component: FormationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

