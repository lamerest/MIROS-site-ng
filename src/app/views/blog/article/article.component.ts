import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable, Observer, Subscription } from 'rxjs';
import { IArticle, LanguageCode } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy {
  id = 0
  article!: IArticle
  lang: LanguageCode = LanguageCode.ru
  
  langSubscription!: Subscription
  subscriber = { 
    next: () => { 
      this.lang = this.languageService.getLanguage();
      this.changeLokalization()
    } 
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService,
    private languageService: LanguageService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id
    this.getArticle()
    
    this.langSubscription = this.languageService.langSubject.subscribe(this.subscriber) 
  }

  ngOnDestroy() {
    this.langSubscription.unsubscribe()
  }


  async getArticle() {
    this.article = await this.blogService.getArticleById(this.id)
  }

  changeLokalization() {
    let localization = this.article.localizations.find(localization => localization.locale === this.lang)
    
    if (localization != null) {
      this.router.navigateByUrl("/article/" + localization.id)
      this.id = localization.id
      this.getArticle()
    }
  }
}
