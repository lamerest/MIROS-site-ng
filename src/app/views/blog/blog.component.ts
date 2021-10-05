import { Component, OnInit } from '@angular/core';
import { IArticle } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';
import { LanguageService } from 'src/app/services/language.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  articles: IArticle[] = []
  firstArticles: IArticle[] = []

  constructor(
    private blogService: BlogService,
    private languageService: LanguageService,
  ) { }

  async ngOnInit() {
    this.articles = await this.blogService.getArticles()
    this.firstArticles = this.articles.splice(0, 3)
    console.log(this.articles[0].preview.formats.small.url);
    console.log("Window object:", this.languageService.getWindow());
    
  }
}
