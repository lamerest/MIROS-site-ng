import { ILocalization, LanguageCode } from "./blog";

export interface IMainPage {
    id:	number | string
    welcome:	string
    welcomeSubtitle:	string
    welcomeButton:	string
    aboutHeader:	string
    
    review:	IReview

    commentariesBlockHeader: string,
    commentaries:	ICommentary[]

    aboutSecondTextBlock:	string
    aboutFirstTextBlock:	string
    aboutSubtitle:	string
    telegramBotHeader:	string
    telegramBotText:	string
    localizations?:	ILocalization[]
    locale:	LanguageCode

    created_at: string,
    updated_at: string,
}

export interface IAboutPage {
    id:	number | string
    mainImage:	IImage
    welocmeHeader:	string
    welcomeText:	string
    welcomeImage:	IImage
    missionHeader:	string
    missionText:	string
    missionMedia:	IImage
    telegramBlockHeader:	string
    telegramBlockText:	string
    instagramBlockHeader:	string
    instagramBlockText:	string
    instagramBlockImage:	IImage
    experienceHeader:	string
    experienceText:	string
    telegramBotHeader:	string
    telegramBotText:	string
    telegramBotImage:	IImage
    contactsHeader:	string
    contactsText:	string
    localizations:	ILocalization[]
    locale: 	LanguageCode
}

export interface IBlogPage {
    title: string,
    lastArticles: string,
    articles: string
}

export interface IMarathonsPage {
    id: number | string
    
    welcomeHeader:	string
    welcomeText:	string
    welcomeSubtitle:	string
    
    firstBlockHeader:	string
    firstBlockSubtitle:	string
    firstBlockProgramHeader:	string
    firstBlockProgramList:	string
    firstBlockButtonText:	string
    
    reasonsBLockHeader:	string
    reasonsBlockFirst:	string
    reasonsBlockSecond:	string
    reasonsBlockThird:	string
    
    whoBlockSubtitle:	string
    whoBlockTitle:	string
    stats:	IStat[]

    review:	IReview

    commentariesBlockHeader: string
    commentaries: ICommentary[]

    motivationBlockSubtitle:	string
    motivationBlockTitle:	string
    motivationBlockButtonText:	string

    localizations:	ILocalization[]
    locale: LanguageCode

    created_at: string,
    updated_at: string,
}

export interface IHeader {
    id: number |	string
    menu:	IMenu,
    languages:	ILanguage[],
    localizations?:	ILocalization[]
    locale:	LanguageCode
}

export interface ILanguage {
    id: number | string
    languageName:	string
    languageCode:	LanguageCode
    languageImage?: IImage
}
export interface IMenu {
    id:	number | string
    main:	string
    marathons:	string
    blog:	string
    about:	string
}

export interface IFooter {
    id:	number | string
    footer:	IFooterContent
    localizations?:	ILocalization[]
    locale:	LanguageCode
}

export interface IFooterContent {
    id: number | string
    socialMediaHeader:	string
    contactsBlockHeader:	string
    contactsBlockPhone:	string
    contactsBlockEmail:	string
    menu: IMenu
}

export interface IReview {
    id: number | string
    reviewsHeader:	string
    reviewsText:	string
    videos:	IVideo[]
}

export interface IStat {
    id: number
    number:	number | string,
    title:	string,
    text:	string,
}
export interface IVideo {
    id:	number | string
    name:	string
    alternativeText:	string
    caption:	string
    width?:	number
    height?:	number
    formats:	any
    hash:	string
    ext:	string
    mime:	string
    size:	number
    url:	string
    previewUrl?:	string
    provider:	string
    provider_metadata:	any
    related?: string
    created_at:	string
    updated_at:	string
}

export interface IImage {
    id?: number |string
    name?:	string
    alternativeText?:	string
    caption?:	string
    width?:	number
    height?:	number
    formats?:	any
    hash?:	string
    ext?:	string
    mime?:	string
    size?:	number
    url:	string
    previewUrl?:	string
    provider?:	string
    provider_metadata?:	any
    related?:	string
    created_by?:	string
    updated_by?:	string
}

export interface ICommentary {
    id:	number | string
    text: string
}