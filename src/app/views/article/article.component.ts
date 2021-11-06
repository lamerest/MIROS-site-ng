import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
      this.changeLocalization()
    } 
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService,
    private languageService: LanguageService,
    private router: Router,
    private readonly meta: Meta
  ) { }

  async ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id
    await this.retrieveArticle()
    this.setMetaTags()
    this.langSubscription = this.languageService.langSubject.subscribe(this.subscriber) 
  }

  ngOnDestroy() {
    this.langSubscription.unsubscribe()
  }


  async retrieveArticle() {
    this.article = await this.blogService.getArticleById(this.id)
  }

  setMetaTags() {
    if (this.article != null) {
      this.meta.updateTag({ name: "description", content: this.article.SEODescription})
      this.meta.updateTag({ name: "keywords", content: this.article.SEOKeywords})
      this.meta.updateTag({ name: "author", content: this.article.author})
    }
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
