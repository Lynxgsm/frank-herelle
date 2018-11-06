import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { HomeComponent } from './layouts/home/home.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FormationComponent } from './layouts/formation/formation.component';
import { BlogComponent } from './layouts/blog/blog.component';
import { EventComponent } from './layouts/event/event.component';
import { CoachingComponent } from './layouts/coaching/coaching.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MainEventComponent } from './components/Home/main-event/main-event.component';
import { ShopComponent } from './layouts/shop/shop.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeAboutComponent } from './components/Home/home-about/home-about.component';
import { ServiceItemComponent } from './components/Home/service-item/service-item.component';
import { LatestArticleComponent } from './components/Home/latest-article/latest-article.component';
import { TestimonialsComponent } from './components/Shared/testimonials/testimonials.component';
import { TestimonialItemComponent } from './components/Shared/testimonial-item/testimonial-item.component';
import { BlogItemComponent } from './components/Blog/blog-item/blog-item.component';
import { LoginComponent } from './layouts/login/login.component';
import { SignupComponent } from './layouts/signup/signup.component';
import { FormationCardComponent } from './components/Formation/formation-card/formation-card.component';
import { UpnavComponent } from './layouts/upnav/upnav.component';
import { EventScheduleComponent } from './components/Event/event-schedule/event-schedule.component';
import { ProductCardComponent } from './components/Shop/product-card/product-card.component';
import { UserComponent } from './layouts/user/user.component';
import { LoaderDirective } from './directives/loader.directive';
import { LoaderComponent } from './components/Shared/loader/loader.component';
import { UserProfileComponent } from './components/User/user-profile/user-profile.component';
import { UserCartComponent } from './components/User/user-cart/user-cart.component';
import { UserFormationComponent } from './components/User/user-formation/user-formation.component';
import { UserEventComponent } from './components/User/user-event/user-event.component';
import { UserDashboardComponent } from './components/User/user-dashboard/user-dashboard.component';
import { CompareValidatorDirective } from './directives/compare-validator.directive';
import { ProductDetailsComponent } from './components/Shop/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FormationComponent,
    BlogComponent,
    EventComponent,
    CoachingComponent,
    MainEventComponent,
    ShopComponent,
    FooterComponent,
    HomeAboutComponent,
    ServiceItemComponent,
    LatestArticleComponent,
    TestimonialsComponent,
    TestimonialItemComponent,
    BlogItemComponent,
    LoginComponent,
    SignupComponent,
    FormationCardComponent,
    UpnavComponent,
    EventScheduleComponent,
    ProductCardComponent,
    UserComponent,
    LoaderDirective,
    LoaderComponent,
    UserProfileComponent,
    UserCartComponent,
    UserFormationComponent,
    UserEventComponent,
    UserDashboardComponent,
    CompareValidatorDirective,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    NgbModalModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
