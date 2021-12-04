import { ICallBackPopup, ICommentary, IReview, IStat } from "./components";
import { IImage } from "./image";
import { ILocalization, LanguageCode } from "./localization";

export interface IMainPage {
    id:	number
    welcome:	string
    welcomeSubtitle:	string
    welcomeButton:	string
    welcomeImage: IImage

    aboutHeader:	string
    aboutSecondTextBlock:	string
    aboutFirstTextBlock:	string
    aboutSubtitle:	string
    aboutImage: IImage
    
    telegramBotHeader:	string
    telegramBotText:	string
    telegramBotImage: IImage
    
    review:	IReview
    
    commentariesBlockHeader: string,
    commentaries:	ICommentary[]
    
    SEODescription?: string,
    SEOKeywords?: string,
    
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
    experienceImages?: IImage[]

    telegramBotHeader:	string
    telegramBotText:	string
    telegramBotImage:	IImage

    supportPatreonText: string
    
    contactsHeader:	string
    contactsText:	string

    localizations:	ILocalization[]
    locale: 	LanguageCode,

    SEODescription?: string,
    SEOKeywords?: string,
}

export interface IBlogPage {
    title: string,
    lastArticles: string,
    articles: string,

    SEODescription?: string,
    SEOKeywords?: string,
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

    callbackPopup: ICallBackPopup[]

    localizations:	ILocalization[]
    locale: LanguageCode

    created_at: string,
    updated_at: string,

    SEODescription?: string,
    SEOKeywords?: string,
}