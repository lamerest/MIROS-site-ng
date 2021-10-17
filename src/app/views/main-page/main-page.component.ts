import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { LanguageCode } from 'src/app/models/blog';
import { IMainPage } from 'src/app/models/pages';
import { ContentService } from 'src/app/services/content.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  scrollEventsCounter = 0;
  isHeaderVisible = false;

  content: IMainPage = standardContent;

  langSubscription!: Subscription;
  subscriber = {
    next: () => {
      console.log("Changing locale");
      this.changeLocalization();
    },
  };

  // @ViewChild('hero') hero: ElementRef | null = null;

  // @HostListener('window:scroll', ['$event']) onScrollEvent($event: any){
  //   if (this.scrollEventsCounter <= 60) {
  //     this.scrollEventsCounter += 1
  //   } else if (!this.isHeaderVisible && this.scrollEventsCounter > 60) {
  //     this.isHeaderVisible = true
  //   }
  // }

  constructor(
    private languageService: LanguageService,
    private contentService: ContentService
  ) {}

  async ngOnInit() {
    this.content = await this.contentService.getMainPage();
    this.langSubscription = this.languageService.langSubject.subscribe(
      this.subscriber
    );
  }

  async changeLocalization() {
    this.content = await this.contentService.getMainPage();
  }
}

const standardContent: IMainPage = {
  id: 2,
  welcome: 'Реалистичный подход  к спорту.',
  welcomeSubtitle: 'Запишись на следующий марафон уже сейчас!',
  welcomeButton: 'Перейти',
  aboutHeader: 'О НАC',
  aboutSecondTextBlock:
    'Мы выступаем за реалистичный и естественный образ жизни, а также за достоверную информацию в сфере питания и спорта. Наши публикации составлены совместно со специалистами или с использованием научных статей, а также имеют рекомендательный характер.',
  aboutFirstTextBlock:
    'Миссия MIROS - мотивировать людей вести здоровый образ жизни через эстетику спорта и правильного питания \n\nВ наших социальных сетях вы найдете полезную информацию о спорте, питании и здоровом образе жизни, а также объявления о ближайших фитнес-событиях MiRos',
  aboutSubtitle: 'Наша миссия',
  telegramBotHeader: 'Telegram бот',
  telegramBotText:
    'MiRos Nutrition, задача которого - составить сбалансированный и здоровый рацион через оценку энергетической ценности продукта \n\nБот сообщит о еде все, что вам необходимо знать: калорийность, кол-во белков, жиров и углеводов',
  locale: LanguageCode.ru,
  created_at: '2021-10-17T10:20:40.934Z',
  updated_at: '2021-10-17T11:06:38.453Z',
  reviews: {
    id: 4,
    reviewHeader: 'Отзывы',
    reviewText:
      'Наши участники часто делятся эмоциями от марафонов и тренировок MiRos \n\nПослушайте впечатления от тех, кто стал частью нашей команды!',
    videos: [
      {
        id: 8,
        name: 'video_interesting.mp4',
        alternativeText: '',
        caption: '',
        formats: null,
        hash: 'video_interesting_fb4c10d0fa',
        ext: '.mp4',
        mime: 'video/mp4',
        size: 18619.37,
        url: '/uploads/video_interesting_fb4c10d0fa.mp4',
        provider: 'local',
        provider_metadata: null,
        created_at: '2021-10-17T10:21:58.590Z',
        updated_at: '2021-10-17T10:21:58.599Z',
      },
      {
        id: 7,
        name: 'IMG_0414.MOV',
        alternativeText: '',
        caption: '',
        formats: null,
        hash: 'IMG_0414_6c2bc3c4f8',
        ext: '.MOV',
        mime: 'video/quicktime',
        size: 17394.61,
        url: '/uploads/IMG_0414_6c2bc3c4f8.MOV',
        provider: 'local',
        provider_metadata: null,
        created_at: '2021-10-17T10:21:58.560Z',
        updated_at: '2021-10-17T10:21:58.568Z',
      },
      {
        id: 6,
        name: 'IMG_7462.MOV',
        alternativeText: '',
        caption: '',
        formats: null,
        hash: 'IMG_7462_d03ff83e7b',
        ext: '.MOV',
        mime: 'video/quicktime',
        size: 13936.2,
        url: '/uploads/IMG_7462_d03ff83e7b.MOV',
        provider: 'local',
        provider_metadata: null,
        created_at: '2021-10-17T10:21:58.477Z',
        updated_at: '2021-10-17T10:21:58.508Z',
      },
      {
        id: 5,
        name: 'IMG_8982.MOV',
        alternativeText: '',
        caption: '',
        formats: null,
        hash: 'IMG_8982_5e7b3718fd',
        ext: '.MOV',
        mime: 'video/quicktime',
        size: 12293.97,
        url: '/uploads/IMG_8982_5e7b3718fd.MOV',
        provider: 'local',
        provider_metadata: null,
        created_at: '2021-10-17T10:21:58.429Z',
        updated_at: '2021-10-17T10:21:58.449Z',
      },
      {
        id: 4,
        name: 'miros.MOV',
        alternativeText: '',
        caption: '',
        formats: null,
        hash: 'miros_f65ecfcdf4',
        ext: '.MOV',
        mime: 'video/quicktime',
        size: 1090.26,
        url: '/uploads/miros_f65ecfcdf4.MOV',
        provider: 'local',
        provider_metadata: null,
        created_at: '2021-10-17T10:21:58.254Z',
        updated_at: '2021-10-17T10:21:58.277Z',
      },
    ],
  },
  commentaries: {
    id: 3,
    firstBlock:
      '### Марафон 05.05-16.05\n\nОчень редко встречается тот продукт или услуга, которая несёт в себе столько ценности и на 100000% оправдывает свою цену! \n\nЗа время марафона я заметила качественные изменения в теле, благодаря силовым тренировкам и растяжке оффлайн! \n\nЖивые встречи и знакомства с такими же заряженными людьми дают стимул не сдаваться! Это прям очень важно!!!! Спасибо вам за это ♥\n️\nА так же внимательность и чуткость со стороны кураторов и организаторов в общем чате, ничего не оставляют без внимания 💕\nMiRos вы супер крутые❗️Развития Вам, покорения новых вершин❗️\nЖдите меня на следующем марафоне 😉',
    secondBlock:
      '### Марафон 05.05-16.05 \nОчень редко встречается тот продукт или услуга, которая несёт в себе столько ценности и на 100000% оправдывает свою цену! \n\nЗа время марафона я заметила качественные изменения в теле, благодаря силовым тренировкам и растяжке оффлайн! \n\nЖивые встречи и знакомства с такими же заряженными людьми дают стимул не сдаваться! Это прям очень важно!!!! Спасибо вам за это ♥\n️\nА так же внимательность и чуткость со стороны кураторов и организаторов в общем чате, ничего не оставляют без внимания 💕\nMiRos вы супер крутые❗️Развития Вам, покорения новых вершин❗️\nЖдите меня на следующем марафоне 😉',
    thirdBlock:
      '### Марафон 05.05-16.05\n\nОчень редко встречается тот продукт или услуга, которая несёт в себе столько ценности и на 100000% оправдывает свою цену! \n\nЗа время марафона я заметила качественные изменения в теле, благодаря силовым тренировкам и растяжке оффлайн! \n\nЖивые встречи и знакомства с такими же заряженными людьми дают стимул не сдаваться! Это прям очень важно!!!! Спасибо вам за это ♥\n️\nА так же внимательность и чуткость со стороны кураторов и организаторов в общем чате, ничего не оставляют без внимания 💕\nMiRos вы супер крутые❗️Развития Вам, покорения новых вершин❗️\nЖдите меня на следующем марафоне 😉',
    blockHeader: "Комментарии"  
  },
  localizations: [{ id: 1, locale: LanguageCode.en }],
};
