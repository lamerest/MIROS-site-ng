import { Injectable } from '@angular/core';
import { LocalStorageService } from '../common/local-storage';
import { LanguageCode } from '../models/blog';
import { IAboutPage, IBlogPage, IFooter, IHeader, IMainPage, IMarathonsPage } from '../models/pages';
import { BaseRequestService } from './base-request.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {


  constructor(
    private requestService: BaseRequestService,
    private localStorage: LocalStorageService
  ) { }

  // PAGES
  async getMainPage(): Promise<IMainPage> { 
    return await this.requestService.get("/main-page?_locale=" + this.getLanguageCode()) 
  }

  async getAboutPage(): Promise<IAboutPage> { 
    return await this.requestService.get("/about?_locale=" + this.getLanguageCode()) 
  }

  async getBlogPage(): Promise<IBlogPage> { 
    return await this.requestService.get("/blog?_locale=" + this.getLanguageCode()) 
  }

  async getMarathonsPage(): Promise<IMarathonsPage> { 
    return await this.requestService.get("/marathons?_locale=" + this.getLanguageCode()) 
  }


  // Components
  async getHeader(): Promise<IHeader> { 
    return await this.requestService.get("/header?_locale=" + this.getLanguageCode()) 
  }

  async getFooter(): Promise<IFooter> { 
    return await this.requestService.get("/footer?_locale=" + this.getLanguageCode()) 
  }

  getLanguageCode() {
    let lang = this.localStorage.getItem("locale")
    return lang? lang : LanguageCode.standardLanguage
  }
}
