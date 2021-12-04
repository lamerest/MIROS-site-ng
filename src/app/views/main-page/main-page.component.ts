import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { IMainPage } from 'src/app/models/pages';
import { ContentService } from 'src/app/services/content.service';
import { LanguageService } from 'src/app/services/language.service';
import { MetaService } from 'src/app/services/meta.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit, OnDestroy {
  scrollEventsCounter = 0;
  isHeaderVisible = false;

  content!: IMainPage;

  langSubscription!: Subscription;

  subscriber = {
    next: () => {
      console.log('Changing locale');
      this.changeLocalization();
    },
  };

  constructor(
    private languageService: LanguageService,
    private contentService: ContentService,
    private readonly _metaService: MetaService,
  ) {}

  async ngOnInit() {
    this.content = await this.contentService.getMainPage();
    this._metaService.setMetaTags(this.content.SEODescription, this.content.SEOKeywords)
    this.appendImageUrls()
    this.langSubscription = this.languageService.langSubject.subscribe(
      this.subscriber
    );
  }

  ngOnDestroy() {
    this.langSubscription.unsubscribe();
  }

  async changeLocalization() {
    this.content = await this.contentService.getMainPage();
    this._metaService.setMetaTags(this.content.SEODescription, this.content.SEOKeywords)
    this.appendImageUrls()
  }

  appendImageUrls() {
    this.content.welcomeImage.url = this.getImageSource(this.content?.welcomeImage?.url)
    this.content.aboutImage.url = this.getImageSource(this.content?.aboutImage?.url)
    this.content.telegramBotImage.url = this.getImageSource(this.content?.telegramBotImage?.url)
  }

  private getImageSource(imageUrl: string): string{
    return environment.serverUrl + imageUrl
  }
}
