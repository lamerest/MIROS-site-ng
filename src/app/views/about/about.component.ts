import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { IAboutPage } from 'src/app/models/pages';
import { ContentService } from 'src/app/services/content.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  content: IAboutPage = standardContent
  
  langSubscription!: Subscription;
  subscriber = {
    next: () => {
      this.getContent();
    },
  };

  constructor(
    private languageService: LanguageService,
    private contentService: ContentService
  ) { }

  ngOnInit(): void {
    this.getContent()
  }

  ngOnDestroy() {
    this.langSubscription.unsubscribe()
  }

  async getContent() {
    this.content = await this.contentService.getAboutPage()
  }
}

const standardContent: IAboutPage = {
  
}
