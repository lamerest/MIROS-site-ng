import { ILocalization, LanguageCode } from "./blog";

export interface IMainPage {
    id:	number | string
    welcome:	string
    welcomeSubtitle:	string
    welcomeButton:	string
    aboutHeader:	string
    reviews:	IReview
    commentaries:	ICommentary
    aboutSecondTextBlock:	string
    aboutFirstTextBlock:	string
    aboutSubtitle:	string
    telegramBotHeader:	string
    telegramBotText:	string
    localizations:	ILocalization[]
    locale:	LanguageCode

    created_at: string,
    updated_at: string,
}

export interface AboutPage {

}

export interface BlogPage {
    
}

export interface MarathonsPage {
    
}

export interface IReview {
    id: number | string
    reviewHeader:	string
    reviewText:	string
    videos:	IVideo[]
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

export interface ICommentary {
    id:	number | string
    firstBlock:	string
    secondBlock:	string
    thirdBlock:	string
    blockHeader: string
}