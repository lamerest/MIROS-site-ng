import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from 'src/app/models/article';
import { ReactionsService } from 'src/app/services/reactions.service';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.scss']
})
export class ReactionsComponent implements OnInit {
  @Input() article: IArticle
  @Input() lightMode: boolean

  likesCounter: number
  dislikesCounter: number

  constructor(
    private readonly _reactionsService: ReactionsService,
  ) { }

  ngOnInit(): void {
  }

  async react(reaction: "like" | "dislike") {
    this.article.userReaction = reaction;
    
    let postObject = {
      article: this.article.id,
      action: reaction
    }

    if (await this._reactionsService.addReaction(postObject)) {
      if (reaction === "like") {
        this.likesCounter++
        if (this.dislikesCounter > 0) this.dislikesCounter--
      } else {
        this.dislikesCounter++
        if (this.likesCounter > 0) this.likesCounter--
      }
    }
  }

  get likes(): number {
    if (this.likesCounter == null) {
      let counter = this.article?.reactions.reduce((acc, cur) => cur.action === "like" ? ++acc : acc, 0); 
      this.likesCounter = counter
      return counter
    } else {
      return this.likesCounter
    }
  }

  get dislikes(): number {
    if (this.dislikesCounter == null) {
      let counter = this.article?.reactions.reduce((acc, cur) => cur.action === "dislike" ? ++acc : acc, 0); 
      this.dislikesCounter = counter
      return counter
    } else {
      return this.dislikesCounter
    }
  }
}
