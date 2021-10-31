import { LanguageCode } from "./blog";
import { IImage } from "./image";

export interface ILanguage {
    id: number | string
    languageName:	string
    languageCode:	LanguageCode
    languageImage?: IImage
}