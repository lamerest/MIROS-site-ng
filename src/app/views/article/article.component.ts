import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IArticle } from 'src/app/models/article';
import { LanguageCode } from 'src/app/models/localization';
import { BlogService } from 'src/app/services/blog.service';
import { LanguageService } from 'src/app/services/language.service';
import { MetaService } from 'src/app/services/meta.service';

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
      this.changeLocalization()
    } 
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService,
    private languageService: LanguageService,
    private router: Router,
    private readonly _metaService: MetaService
  ) { }

  async ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id
    await this.retrieveArticle()
    this.langSubscription = this.languageService.langSubject.subscribe(this.subscriber) 
  }

  ngOnDestroy() {
    this.langSubscription.unsubscribe()
  }


  async retrieveArticle() {
    this.article = await this.blogService.getArticleById(this.id)
    this._metaService.setMetaTags(this.article.SEODescription, this.article.SEOKeywords)
  }

  changeLocalization() {
    let localization = this.article.localizations.find(localization => localization.locale === this.lang)
    
    if (localization != null) {
      this.router.navigateByUrl("/article/" + localization.id)
      this.id = localization.id
      this.retrieveArticle()
    }
  }
}
