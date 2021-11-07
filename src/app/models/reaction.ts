export interface IReaction {
    article: number // ID
    user?: number // ID
    action: "like" | "dislike"
}