import { ICategory } from "./catgory";
import { ILocalization, LanguageCode } from "./localization";

export interface IArticle {
  id: number;
  content: string;
  title: string;
  date: string;
  author: string;
  previewText: string;
  likes: number;
  dislikes: number;
  locale: LanguageCode;
  published_at: string;
  created_at: string;
  updated_at: string;
  preview: IArticlePreview;
  categories: ICategory[];
  localizations: ILocalization[];
  SEODescription: string;
  SEOKeywords: string;
  SEOAuthor: string;
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
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
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
