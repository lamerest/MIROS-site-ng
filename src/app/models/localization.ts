export interface ILocalization {
  id: number;
  locale: LanguageCode;
  published_at?: string;
}

export enum LanguageCode {
  fr = 'fr',
  en = 'en',
  ru = 'ru-RU',
  standardLanguage = 'ru-RU',
}
