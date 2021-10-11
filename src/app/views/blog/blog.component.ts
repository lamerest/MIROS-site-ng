import { Component, OnInit } from '@angular/core';
import { IArticle } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  articles: IArticle[] = []
  firstArticles: IArticle[] = []

  subscriber = { 
    next: (x: any) => { this.getArticles() } 
  }

  constructor(
    private blogService: BlogService,
    private languageService: LanguageService,
  ) { }

  async ngOnInit() {
    this.getArticles()
    this.languageService.langSubject.subscribe(this.subscriber) 
  }

  async getArticles() {
    this.articles = await this.blogService.getArticles()
    this.firstArticles = this.articles?.splice(0, 4)
  }
}
