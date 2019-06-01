import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CompanyInfoComponent } from './company-info/company-info.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { CardComponent } from './card/card.component';

import { SlickModule } from 'ngx-slick';
import { SliderComponent } from './slider/slider.component';
import { CompanyComponent } from './containers/company/company.component';
import { ArticleComponent } from './containers/article/article.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CompanyInfoComponent,
    ContactInfoComponent,
    CardComponent,
    SliderComponent,
    CompanyComponent,
    ArticleComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SlickModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
