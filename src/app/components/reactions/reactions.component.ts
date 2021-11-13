import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { IArticle } from 'src/app/models/article';
import { ReactionsService } from 'src/app/services/reactions.service';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.scss']
})
export class ReactionsComponent {
  @Input() article: IArticle
  @Input() lightMode: boolean

  // @Output() onUserReaction = new EventEmitter()

  likesCounter: number
  dislikesCounter: number

  get likes(): number {
    if (this.article == null) {
      return 0;
    }

    // Calculates reactions of other users
    let counter = this.article?.reactions.reduce((acc, cur) => cur.action === "like" ? ++acc : acc, 0); 
    
    // Calculates reactions from LocalStorage of current user 
    let reactionFromLocal = this._reactionsService.reactions.find(reaction => reaction.article.id === this.article?.id)    
    if (reactionFromLocal != null && reactionFromLocal.action !== null && reactionFromLocal.action === "like") {
      counter++
    }

    this.likesCounter = counter
    return this.likesCounter
  }

  get dislikes(): number {
    if (this.article == null) {
      return 0;
    }

    // Calculates reactions of other users
    let counter = this.article?.reactions.reduce((acc, cur) => cur.action === "dislike" ? ++acc : acc, 0); 
    
    // Calculates reactions from LocalStorage of current user 
    let reactionFromLocal = this._reactionsService.reactions.find(reaction => reaction.article.id === this.article?.id)    
    if (reactionFromLocal != null && reactionFromLocal.action !== null && reactionFromLocal.action === "dislike") {
      ++counter
    }

    this.dislikesCounter = counter

    return this.dislikesCounter
  }

  constructor(
    private readonly _reactionsService: ReactionsService,
  ) { }

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

    // this.onUserReaction.emit()
  }
}
