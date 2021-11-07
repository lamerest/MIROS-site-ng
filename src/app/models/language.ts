import { IImage } from "./image";
import { LanguageCode } from "./localization";

export interface ILanguage {
    id: number | string
    languageName:	string
    languageCode:	LanguageCode
    languageImage?: IImage
}