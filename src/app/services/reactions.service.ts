import { Injectable } from '@angular/core';
import { LocalStorageService } from '../common/local-storage';
import { IReaction, IReactionPost } from '../models/reaction';
import { BaseRequestService } from './base-request.service';

@Injectable({
  providedIn: 'root'
})
export class ReactionsService {

  get reactions(): IReaction[] {
    return JSON.parse(this.localStorage.getItem("reactions"))
  }

  set reactions(reactions: IReaction[]) {
    this.localStorage.setItem("reactions", JSON.stringify(reactions))
  }

  constructor(
    private readonly _requestService: BaseRequestService,
    private readonly localStorage: LocalStorageService
  ) { }

  async addReaction(reaction: IReactionPost): Promise<boolean> {
    if (reaction == null) {
      return false;
    }

    if (this.reactions == null) {
      console.log("Defined reactions in local storage");
      this.reactions = []
    }

    // Checking if user already reacted on the article
    let tempReaction = this.reactions.find(x => x.article.id === reaction.article)
    
    if (tempReaction != null && tempReaction.id != null) {
      console.log("User already reacted on the article");

      if (tempReaction.action !== reaction.action) {
        try {
          console.log("Reaction changed");
          tempReaction = this.replaceReactionInLocalStorage(tempReaction.article.id)
          await this.updateReactionOnArticle(tempReaction.id, tempReaction);
          return true;
        } catch (error) {
          return false;
        }
      } else {
        return false;
      }
    }

    try {
      console.log("Creating new reaction");
      let reactions = this.reactions
      let newReaction = await this.setReactionOnArticle(reaction)
      reactions.push(newReaction);
      this.reactions = reactions;
      return true
    } catch (error) {
      return false
    }
  }

  private async setReactionOnArticle(reaction: IReactionPost): Promise<IReaction> {
    return await this._requestService.post("/reactions", reaction)
  }

  private async updateReactionOnArticle(reactionId: number, reaction: IReaction) {
    if (reactionId != null && reaction != null) {
      return await this._requestService.put("/reactions/" + reactionId, reaction)
    } else {
      throw new Error("Can't update reaction")
    }
  }

  // Replace reaction action to opposite 
  private replaceReactionInLocalStorage(articleId: number): IReaction {
    let reactions = this.reactions
    let reactionToChange = reactions.find(x => x.article.id === articleId)
    reactions[reactions.indexOf(reactionToChange)].action = reactionToChange.action === "like"? "dislike" : "like"     
    this.reactions = reactions;
    return reactionToChange;
  }
}
