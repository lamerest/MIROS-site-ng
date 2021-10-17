import { Injectable } from '@angular/core';
import { LocalStorageService } from '../common/local-storage';
import { LanguageCode } from '../models/blog';
import { AboutPage, BlogPage, IMainPage, MarathonsPage } from '../models/pages';
import { BaseRequestService } from './base-request.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {


  constructor(
    private requestService: BaseRequestService,
    private localStorage: LocalStorageService
  ) { }

  async getMainPage(): Promise<IMainPage> { 
    return await this.requestService.get("/main-page?_locale=" + this.getLanguageCode()) 
  }

  async getAboutPage(): Promise<AboutPage> { 
    return await this.requestService.get("/about?_locale=" + this.getLanguageCode()) 
  }

  async getBlogPage(): Promise<BlogPage> { 
    return await this.requestService.get("/blog?_locale=" + this.getLanguageCode()) 
  }

  async getMarathonsPage(): Promise<MarathonsPage> { 
    return await this.requestService.get("/marathons?_locale=" + this.getLanguageCode()) 
  }

  getLanguageCode() {
    let lang = this.localStorage.getItem("locale")
    return lang? lang : LanguageCode.standardLanguage
  }
}
