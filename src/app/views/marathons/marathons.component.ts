import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { LanguageCode } from 'src/app/models/blog';
import { IMarathonsPage } from 'src/app/models/pages';
import { ContentService } from 'src/app/services/content.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-marathons',
  templateUrl: './marathons.component.html',
  styleUrls: ['./marathons.component.scss'],
})
export class MarathonsComponent implements OnInit, OnDestroy {
  content: IMarathonsPage = standardContent;

  langSubscription!: Subscription;
  subscriber = {
    next: () => {
      this.getContent();
    },
  };

  constructor(
    private languageService: LanguageService,
    private contentService: ContentService
  ) {}

  ngOnInit(): void {
    this.getContent();
    this.langSubscription = this.languageService.langSubject.subscribe(
      this.subscriber
    );
  }

  ngOnDestroy() {
    this.langSubscription.unsubscribe();
  }

  async getContent() {
    this.content = await this.contentService.getMarathonsPage();
  }
}

const standardContent: IMarathonsPage = {
  id: 1,
  welcomeHeader: 'ФИТНЕС-МАРАФОНЫ',
  welcomeText:
    'Интенсивные тренировки в течение 12 дней с полезной информацией от проффесионалов в различных областях спорта, здоровья и питания',
  welcomeSubtitle: 'узнайте больше',
  firstBlockHeader: 'Когда?',
  firstBlockSubtitle: 'следите за обновлениями в наших соцсетях',
  firstBlockProgramHeader: 'Программа марафона',
  firstBlockProgramList:
    '- Силовые тренировки\n- Растяжки\n- Онлайн и офлайн тренировки\n- Треккер вашего прогресса\n- Комментарии и советы от нашей команды\n- Новая и полезная информация\n- Много интерактива и общения',
  firstBlockButtonText: 'Записаться',
  reasonsBLockHeader: 'Почему MIROS?',
  reasonsBlockFirst:
    'Небольшое количество участников - отношения в коллективе будет максимально крепкие, мотивация сильной, а поддержка коллектива мирос - персонализированной ',
  reasonsBlockSecond:
    'Качественные тренировки и консультации - все встречи проходят в живом формате и у участников есть возможность получить личную консультацию специалиста',
  reasonsBlockThird:
    'Забота о личных целях - марафон начинается с постановки индивидуальных целей, которые будут учтены ',
  whoBlockSubtitle: 'кто мы?',
  whoBlockTitle:
    'MIROS - это перспективный быстро растущий проект с активным коммьюнити и большими планами на будущее.',
  motivationBlockSubtitle: 'Измените свою жизнь к лучшему! ',
  motivationBlockTitle: 'Запишитесь на марафон',
  motivationBlockButtonText: 'Записаться',
  locale: LanguageCode.ru,
  created_at: '2021-10-17T13:12:17.817Z',
  updated_at: '2021-10-17T13:12:17.861Z',
  stats: [
    {
      id: 1,
      number: '12',
      title: 'событий',
      text: 'уже проведено нами под эгидой MIROS',
    },
    {
      id: 2,
      number: '1000+',
      title: 'человек',
      text: 'насчитывает наше коммьюнити',
    },
    {
      id: 3,
      number: '2',
      title: 'года',
      text: 'опыта и мы не собираемся останавливаться',
    },
  ],
  localizations: [{ id: 2, locale: LanguageCode.en }],
};
