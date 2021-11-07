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

export interface IArticlePreview {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  
  width: number;
  height: number;
  
  formats: {
    thumbnail: IPreviewFormat;
    large: IPreviewFormat;
    medium: IPreviewFormat;
    small: IPreviewFormat;
  };
  
  url: string;
  previewUrl: string;
  
  hash: string;
  ext: string;
  mime: string;
  size: number;
  
  provider: string;
  provider_metadata: string;

  created_at: string;
  updated_at: string;
}

export interface IPreviewFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: string;
  url: string;
}
