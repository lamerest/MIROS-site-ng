import { ILanguage } from "./language";
import { ILocalization, LanguageCode } from "./localization";
import { IVideo } from "./video";

export interface ICallBackPopup {
    header: string,
    name: string,
    phone: string,
    mail: string,
    button: string,
}

export interface ICommentary {
    id:	number | string
    text: string
}

export interface IStat {
    id: number
    number:	number | string,
    title:	string,
    text:	string,
}

export interface IReview {
    id: number | string
    reviewsHeader:	string
    reviewsText:	string
    videos:	IVideo[]
}

export interface IFooterContent {
    id: number | string
    socialMediaHeader:	string
    contactsBlockHeader:	string
    contactsBlockPhone:	string
    contactsBlockEmail:	string
    menu: IMenu
}

export interface IFooter {
    id:	number | string
    footer:	IFooterContent
    localizations?:	ILocalization[]
    locale:	LanguageCode
}

export interface IMenu {
    id:	number | string
    main:	string
    marathons:	string
    blog:	string
    about:	string
}

export interface IHeader {
    id: number |	string
    menu:	IMenu,
    languages:	ILanguage[],
    localizations?:	ILocalization[]
    locale:	LanguageCode
}