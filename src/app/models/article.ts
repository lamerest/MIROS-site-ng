import { IArticlePreview } from "./article-preview";
import { ICategory } from "./catgory";
import { ILocalization, LanguageCode } from "./localization";
import { IReaction } from "./reaction";

export interface IArticle {
  id: number;
  content: string;
  title: string;
  date: string;
  author: string;
  previewText: string;
  reactions: IReaction[];
  preview: IArticlePreview;
  categories: ICategory[];
  
  published_at: string;
  created_at: string;
  updated_at: string;
  
  
  SEODescription: string;
  SEOKeywords: string;
  SEOAuthor: string;
  
  localizations: ILocalization[];
  locale: LanguageCode;

  // Custom field for working with local storaged reactions
  userReaction?: "like" | "dislike"
}