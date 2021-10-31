export interface IArticle {
    id: number,
    content: string,
    title: string,
    date: string,
    author: string,
    previewText: string,
    likes: number,
    dislikes: number,
    locale: LanguageCode,
    published_at: string,
    created_at: string,
    updated_at: string,
    preview: IArticlePreview,
    categories: ICategory[],
    localizations: ILocalization[]
  }

  export interface IArticlePreview {
    id: number,
    name: string,
    alternativeText: string,
    caption: string,
    width: number,
    height: number,
    formats: {
      thumbnail: IPreviewFormat,
      large: IPreviewFormat,
      medium: IPreviewFormat,
      small: IPreviewFormat,
    },
    hash: string,
    ext: string,
    mime: string,
    size: number,
    url: string,
    previewUrl: string,
    provider: string,
    provider_metadata: string,
    created_at: string,
    updated_at: string
  }

  export interface IPreviewFormat {
    name: string,
    hash: string,
    ext: string,
    mime: string,
    width: number,
    height: number,
    size: number,
    path: string,
    url: string
  }

  export interface ICategory {
    id: number,
    name: string,
    hexColor: string,
    textHexColor: string,
    locale: LanguageCode,
    published_at: string,
    created_at: string,
    updated_at: string,
    articles: IArticle[],
    localizations: ILocalization[]
  }

  export interface ILocalization {
    id: number,
    locale: LanguageCode,
    published_at?: string
  }

  export enum LanguageCode {
    fr = "fr",
    en = "en",
    ru = "ru-RU",
    standardLanguage = "ru-RU"
  }