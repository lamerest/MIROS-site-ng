import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticle } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  id = 0
  article!: IArticle 

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService,
  ) { }

  async ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id 
    })
    this.article = await this.blogService.getArticleById(this.id)
  }

}
