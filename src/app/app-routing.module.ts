import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes, Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { CompanyComponent } from './containers/company/company.component';
import { ArticleComponent } from './containers/article/article.component';
import { Title } from '@angular/platform-browser';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'companies', component: CompanyComponent, data: {title: 'Empresas'} },
  { path: 'articles', component: ArticleComponent, data: {title: 'Artículos'} },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
  
}
