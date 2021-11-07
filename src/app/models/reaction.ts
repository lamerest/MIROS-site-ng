import { IArticle } from "./article";

export interface IReaction {
    id?: number 
    article: IArticle
    user?: any // Must be IUser
    action: "like" | "dislike"
}

export interface IReactionPost {
    article: number
    user?: number
    action: "like" | "dislike"
}