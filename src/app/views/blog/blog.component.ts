import { Component, OnInit } from '@angular/core';
import { IArticle } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  articles: IArticle[] = []

  constructor(
    private blogService: BlogService,
  ) { }

  async ngOnInit() {
    this.articles = await this.blogService.getArticles()
  }
}
