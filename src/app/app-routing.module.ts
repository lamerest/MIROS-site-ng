import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleResolver } from './resolvers/article.resolver';
import { AboutComponent } from './views/about/about.component';
import { ArticleComponent } from './views/article/article.component';
import { BlogComponent } from './views/blog/blog.component';
import { LoginComponent } from './views/login/login.component';
import { MainPageComponent } from './views/main-page/main-page.component';
import { MarathonsComponent } from './views/marathons/marathons.component';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "about", component: AboutComponent },
  { path: "marathons", component: MarathonsComponent },
  { path: "blog", component: BlogComponent },
  { path: "article/:id", component: ArticleComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  //{ path: "**", component: 404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }