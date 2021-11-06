import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
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

  lang = LanguageCode.standardLanguage

  langSubject = new Subject<LanguageCode>()
  
  constructor(
    private localStorage: LocalStorageService,
  ) { }

  getWindow() {
    return window
  }

  setLanguage(lang: LanguageCode | null | undefined) {
    if (lang != null) {
      this.lang = lang
      this.localStorage.setItem("locale", this.lang)
      this.langSubject.next(this.lang)
    }
  }

  getLanguage(): LanguageCode {
    let lang = this.localStorage.getItem("locale")

    if (lang == null)  {
      this.localStorage.setItem("locale", LanguageCode.standardLanguage)
      lang = LanguageCode.standardLanguage
    }

    this.lang = lang as LanguageCode
    return this.lang
  }
}
