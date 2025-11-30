import { Component, OnInit } from '@angular/core';

interface NewsArticle {
  id: number;
  title: string;
  date: string;
  excerpt: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  readonly articles: NewsArticle[] = [
     {
      id: 1,
      title: 'Розвиток штучного інтелекту в Україні',
      date: '29 листопада 2025',
      excerpt: 'Українські стартапи активно впроваджують AI-рішення для бізнесу, освіти та медицини.'
    },
    {
      id: 2,
      title: 'Нові правила екологічного будівництва',
      date: '28 листопада 2025',
      excerpt: 'Уряд запровадив стандарти «зеленого» будівництва, щоб зменшити викиди CO2 та енерговитрати.'
    },
    {
      id: 3,
      title: 'Космічні технології: місія на Марс',
      date: '27 листопада 2025',
      excerpt: 'Українські інженери беруть участь у міжнародному проекті по створенню житлових модулів для Марсу.'
    },
    {
      id: 4,
      title: 'Модернізація системи освіти',
      date: '26 листопада 2025',
      excerpt: 'Впровадження інтерактивних платформ та онлайн-курсів допомагає зробити навчання більш доступним.'
    },
    {
      id: 5,
      title: 'Культурні події у Києві',
      date: '25 листопада 2025',
      excerpt: 'Міський культурний центр організував серію виставок, концертів та воркшопів для молоді.'
    },
    {
    id: 6,
    title: 'Нові відкриття у космосі',
    date: '30 листопада 2025',
    excerpt: 'Міжнародна команда астрономів виявила нові екзопланети, які можуть бути придатні для життя, відкриваючи нові горизонти для досліджень космосу.'
    }

  ];

  constructor() {}

  ngOnInit(): void {}


  getExcerpt(article: NewsArticle, maxLength: number = 120): string {
    return article.excerpt.length > maxLength
      ? article.excerpt.slice(0, maxLength) + '...'
      : article.excerpt;
  }


  trackById(index: number, article: NewsArticle): number {
    return article.id;
  }
}
