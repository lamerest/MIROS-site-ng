import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IArticle } from 'src/app/models/blog';
import { IBlogPage } from 'src/app/models/pages';
import { BlogService } from 'src/app/services/blog.service';
import { ContentService } from 'src/app/services/content.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {
  articles: IArticle[] = []
  firstArticles: IArticle[] = []

  content: IBlogPage = standardContent

  langSubscription!: Subscription
  subscriber = { 
    next: () => this.getContent() 
  }

  constructor(
    private blogService: BlogService,
    private languageService: LanguageService,
    private contentService: ContentService
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
    this.getArticles()
  }

  async getArticles() {
    this.articles = await this.blogService.getArticles()
    console.log(this.articles);
    this.firstArticles = this.articles?.splice(0, 4)
  }
}

const standardContent: IBlogPage = {
  title: "Блог",
  lastArticles: "Последние статьи",
  articles: "СТАТЬИ"
}