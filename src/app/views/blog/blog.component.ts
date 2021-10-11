import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IArticle } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {
  articles: IArticle[] = []
  firstArticles: IArticle[] = []

  langSubscription!: Subscription
  subscriber = { 
    next: (x: any) => { this.getArticles() } 
  }

  constructor(
    private blogService: BlogService,
    private languageService: LanguageService,
  ) { }

  async ngOnInit() {
    this.getArticles()
    this.langSubscription = this.languageService.langSubject.subscribe(this.subscriber) 
  }

  ngOnDestroy() {
    this.langSubscription.unsubscribe()
  }

  async getArticles() {
    this.articles = await this.blogService.getArticles()
    this.firstArticles = this.articles?.splice(0, 4)
  }
}
