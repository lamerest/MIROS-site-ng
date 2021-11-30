import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IArticle } from 'src/app/models/article';
import { IBlogPage } from 'src/app/models/pages';
import { BlogService } from 'src/app/services/blog.service';
import { ContentService } from 'src/app/services/content.service';
import { LanguageService } from 'src/app/services/language.service';
import { MetaService } from 'src/app/services/meta.service';
import { ReactionsService } from 'src/app/services/reactions.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {
  articles: IArticle[] = []
  // firstArticles: IArticle[] = []

  content: IBlogPage = standardContent

  langSubscription!: Subscription
  subscriber = { 
    next: () => this.getContent() 
  }

  constructor(
    private blogService: BlogService,
    private languageService: LanguageService,
    private contentService: ContentService,
    private readonly _metaService: MetaService,
    private readonly _reactionsService: ReactionsService,
  ) { }

  async ngOnInit() {
    this.getContent()
    this.langSubscription = this.languageService.langSubject.subscribe(this.subscriber) 
  }

  ngOnDestroy() {
    this.langSubscription.unsubscribe()
  }

  async getContent() {
    this.content = await this.contentService.getBlogPage()
    this._metaService.setMetaTags(this.content.SEODescription, this.content.SEOKeywords)
    ;
    
    await this.getArticles()
    this.defineReactionsOnArticles()
  }

  private async getArticles() {
    this.articles = await this.blogService.getArticles()
    // this.firstArticles = this.articles?.splice(0, 6)
    console.log("Got articles: ", this.articles);
  }

  private defineReactionsOnArticles() {
    let reactions = this._reactionsService.reactions
    
    if (reactions == null) {
      return;
    }

    // let articles = [...this.firstArticles, ...this.articles] 

    for (let reaction of reactions) {
      let index = this.articles.map(function(article) { return article.id; }).indexOf(reaction.article.id);
      
      if (index != -1) {
        this.articles[index].userReaction = reaction.action
      }
    }
  }
}

const standardContent: IBlogPage = {
  title: "Блог",
  lastArticles: "Последние статьи",
  articles: "СТАТЬИ"
}