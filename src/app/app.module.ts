import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './views/main-page/main-page.component';
import { AboutComponent } from './views/about/about.component';
import { MarathonsComponent } from './views/marathons/marathons.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './views/blog/blog.component';
import { ArticleComponent } from './views/blog/article/article.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { CommentariesComponent } from './components/commentaries/commentaries.component';
import { HeroComponent } from './views/main-page/hero/hero.component';
import { AboutSectionComponent } from './views/main-page/about-section/about-section.component';
import { HeroMarathonsComponent } from './views/marathons/hero-marathons/hero-marathons.component';
import { CallbackComponent } from './components/popups/callback/callback.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ArticleResolver } from './resolvers/article.resolver';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { environment } from 'src/environments/environment';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AboutComponent,
    MarathonsComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    ArticleComponent,
    FeedbackComponent,
    CommentariesComponent,
    HeroComponent,
    AboutSectionComponent,
    HeroMarathonsComponent,
    CallbackComponent,
    ArticleCardComponent,
    ArticlesListComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    MarkdownModule.forRoot(
      { 
        loader: HttpClient,
        markedOptions: {
          provide: MarkedOptions,
          useValue: {
            baseUrl: environment.serverUrl
          }
        } 
      })
  ],
  providers: [ArticleResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
