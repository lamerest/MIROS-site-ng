import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(
    private _meta: Meta
  ) { }

  setMetaTags(SEODescription: string, SEOKeywords: string, SEOAuthor = "Slava Vladykin") {    
    
    if(SEODescription != null) {
      
      if (this._meta.getTag("name='description'") != null) {
        this._meta.updateTag({ name: "description", content: SEODescription })
      } else {
        this._meta.addTag({ name: "description", content: SEODescription })
      }
    }

    if(SEOKeywords != null) {
      if (this._meta.getTag("name='keywords'") != null) {
        this._meta.updateTag({ name: "keywords", content: SEOKeywords })
      } else {
        this._meta.addTag({ name: "keywords", content: SEOKeywords })
      }
    }
    
    if (this._meta.getTag("name='author'") != null) {
      this._meta.updateTag({ name: "author", content: SEOAuthor })
    } else {
      this._meta.addTag({ name: "author", content: SEOAuthor })
    }
  }
}
