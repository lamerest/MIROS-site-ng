import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { LanguageCode } from 'src/app/models/blog';
import { IImage } from 'src/app/models/image';
import { IAboutPage } from 'src/app/models/pages';
import { ContentService } from 'src/app/services/content.service';
import { LanguageService } from 'src/app/services/language.service';
import { environment } from 'src/environments/environment';

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
    this.langSubscription = this.languageService.langSubject.subscribe(this.subscriber)
  }

  ngOnDestroy() {
    this.langSubscription.unsubscribe()
  }

  async getContent() {
    this.content = await this.contentService.getAboutPage()
    this.appendImageUrls()
  }

  appendImageUrls() {
    this.content.mainImage.url = environment.serverUrl + this.content.mainImage.url
    this.content.welcomeImage.url = environment.serverUrl + this.content.welcomeImage.url
    this.content.missionMedia.url = environment.serverUrl + this.content.missionMedia.url
    this.content.instagramBlockImage.url = environment.serverUrl + this.content.instagramBlockImage.url
    this.content.telegramBotImage.url = environment.serverUrl + this.content.telegramBotImage.url
  }

  getImageSource(image: IImage): string{
    return environment.serverUrl + image.url
  }
}

const standardContent: IAboutPage = {
    id:	1,
    mainImage:	{ url: "assets/img/About%20main%20.png" },
    welocmeHeader: "МЫ - MIROS TEAM",
    welcomeText:	"Идея MiRos появилась вместе с желанием создать комплексную платформу, которая собрала бы в себе все важные аспекты здорового образа жизни и совместила бы их так, чтобы любой человек мог добиться реалистичного и естественного подхода к спорту, питанию, и психологии зож",
    welcomeImage:	{ url: "assets/img/About%20polaroid.png" },

    missionHeader:	"Наша миссия",
    missionText:	"Помочь людям построить здоровые отношения со своим телом через реалистичный подход к ЗОЖ и эстетику спорта \n\n Сегодня наш проект это - \n - Регулярные тренировки с профессионалами в совершенно разных фитнес-направлениях   марафоны с целью создания эффективной, но регулярной фитнес-рутины\n - Консультации со специалистами в области диетологии, нутрициологии и психологии \n - Блог с проверенной эксклюзивной информацией о спорте и питании",
    missionMedia:	{ url: "assets/img/About%20polaroid%202.png" },

    telegramBlockHeader:	"Telegram канал",
    telegramBlockText:	"Здесь ты найдёшь разноплановую информацию о фитнесе: эффективные тренировки, вкусные и полезные рецепты, а также просто факты и лайфхаки, которые помогут тебе сделать своё тело более выносливым и энергичным",
    
    instagramBlockHeader:	"Instagram",
    instagramBlockText:	"Эстетика здоровья и спорта в аккаунте нашего инстаграма. Здесь мы регулярно размещаем всю актуальную информацию о работе проекта, а также расписание ближайших спортивных событий MiRos",
    instagramBlockImage:	{ url: "assets/img/About%20polaroid%203.png" },

    experienceHeader:	"Опыт",
    experienceText:	"Первый марафон MIROS (01.02.21 - 14.02.21) \n - Второй марафон MIROS (05.05.21 - 16.05.21) \n - Летний спортивный сезон с MIROS 2021\n - Встречи-консультации со специалистами",

    telegramBotHeader:	"Telegram бот",
    telegramBotText:	"Телеграм-бот, задача которого - составить сбалансированный и здоровый рацион через оценку энергетической ценности продукта",
    telegramBotImage:	{ url: "assets/img/Bot%20demo.png" },

    contactsHeader:	"Контакты",
    contactsText:	"Мы открыты к сотрудничеству со специалистами в сфере спорта, психологии, диетологии и нутрициологии",

    localizations:	[],
    locale: 	LanguageCode.ru
}
