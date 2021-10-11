import { Injectable } from '@angular/core';
import { LocalStorageService } from '../common/local-storage';
import { LanguageCode } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  lang = LanguageCode.ru
  
  constructor(
    private localStorage: LocalStorageService,
  ) { }

  getWindow() {
    return window
  }

  setLanguage(lang: LanguageCode) {
    this.lang = lang
    this.localStorage.setItem("locale", this.lang)
  }

  getLanguage(): LanguageCode | string {
    this.lang = this.localStorage.getItem("locale") as LanguageCode
    return this.lang
  }


}
