export interface GuideSection {
  id: string;
  order: number;
  title: string;
  summary: string;
  path: string;
  ready: boolean;
}

// Додавайте нові розділи сюди по мірі наповнення сайту.
// ready: false -> картка показується як "незабаром" і не веде на сторінку.
export const sections: GuideSection[] = [
  {
    id: 'what-is-target',
    order: 1,
    title: 'Що таке таргет',
    summary:
      'Базове поняття: що таке таргетована реклама, чим вона відрізняється від звичайної та навіщо вона бізнесу.',
    path: '/shcho-take-target',
    ready: true,
  },
  {
    id: 'audience-segments',
    order: 2,
    title: 'Сегменти аудиторії',
    summary: 'Як аудиторію ділять на групи за віком, статтю, гео та інтересами.',
    path: '/audience-segments',
    ready: false,
  },
  {
    id: 'ad-platforms',
    order: 3,
    title: 'Рекламні платформи',
    summary: 'Meta Ads, TikTok Ads, Google Ads — де і як запускають таргетовану рекламу.',
    path: '/ad-platforms',
    ready: false,
  },
  {
    id: 'funnel',
    order: 4,
    title: 'Воронка продажів',
    summary: 'Від першого показу оголошення до покупки: як побудований шлях клієнта.',
    path: '/funnel',
    ready: false,
  },
  {
    id: 'budget',
    order: 5,
    title: 'Бюджет і ставки',
    summary: 'Як формується вартість показу та кліку, і від чого вона залежить.',
    path: '/budget',
    ready: false,
  },
];
