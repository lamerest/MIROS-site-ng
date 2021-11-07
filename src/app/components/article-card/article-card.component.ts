import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from 'src/app/models/article';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {
  @Input() article!: IArticle;

  constructor() { }

  ngOnInit(): void {
  }

  getPreviewUrl(article: IArticle): string {
    return environment.serverUrl + article.preview.formats.small.url;
  }

  like() {
    console.log("like");
  }

  dislike() {
    console.log("dislike");
  }
}
