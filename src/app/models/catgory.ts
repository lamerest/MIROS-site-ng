import { IArticle } from "./article";
import { ILocalization, LanguageCode } from "./localization";

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