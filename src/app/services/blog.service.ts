import { Injectable } from '@angular/core';
import { LocalStorageService } from '../common/local-storage';
import { IArticle, ICategory } from '../models/blog';
import { BaseRequestService } from './base-request.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  articleUrl = "/articles"
  categoryUrl = "/categories"

  constructor(
    private requestService: BaseRequestService,
    private localStorage: LocalStorageService,
  ) { }

  async getArticles(): Promise<IArticle[]> {
    let lang = this.localStorage.getItem('locale')    
    return await this.requestService.get(`${this.articleUrl}?_locale=${lang? lang : "en"}`)
  }

  async getArticleById(articleId: number): Promise<IArticle> {
    return await this.requestService.get(this.articleUrl + "/" + articleId)
  }

  async getCategories(): Promise<ICategory[]> {
    return await this.requestService.get(this.categoryUrl)
  }

  async getCategoryById(categoryId: number): Promise<ICategory> {
    return await this.requestService.get(this.categoryUrl + "/" + categoryId)
  }
}
