import { Injectable } from '@angular/core';
import { from, Observable, Observer, Subject } from 'rxjs';
import { LocalStorageService } from '../common/local-storage';
import { LanguageCode } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  // langObserver: Observer<LanguageCode> = {
  //   next: (x) => x,
  //   error: x => x,
  //   complete: () => console.log("complete")
  // }

  lang = LanguageCode.ru

  langSubject = new Subject<LanguageCode>()
  
  constructor(
    private localStorage: LocalStorageService,
  ) { }

  getWindow() {
    return window
  }

  setLanguage(lang: LanguageCode) {
    this.lang = lang
    this.localStorage.setItem("locale", this.lang)
    this.langSubject.next(this.lang)
  }

  getLanguage(): LanguageCode {
    this.lang = this.localStorage.getItem("locale") as LanguageCode
    return this.lang
  }
}
