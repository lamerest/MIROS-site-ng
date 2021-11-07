import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from 'src/app/models/article';
import { ReactionsService } from 'src/app/services/reactions.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {
  @Input() article!: IArticle;

  constructor(
    private readonly _reactionsService: ReactionsService,
  ) { }

  ngOnInit(): void {
  }

  getPreviewUrl(article: IArticle): string {
    return environment.serverUrl + article.preview.formats.small.url;
  }

  react(reaction: "like" | "dislike") {
    console.log(reaction);
    this.article.userReaction = reaction;
    this._reactionsService.addReaction(
      {
        article: this.article.id,
        action: reaction
      }
    )
  }
}
