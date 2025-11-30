// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component, OnInit } from '@angular/core';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  features: Feature[] = [
    { icon: 'home', title: 'Зручна навігація', description: 'Легко переміщайтесь між сторінками завдяки інтуїтивній навігації.' },
    { icon: 'article', title: 'Останні новини', description: 'Будьте в курсі найсвіжіших новин та оновлень у світі.' },
    { icon: 'person', title: 'Ваш профіль', description: 'Доступ до персональної сторінки та налаштувань облікового запису.' },
    { icon: 'settings', title: 'Налаштування', description: 'Керуйте своїми вподобаннями та персоналізацією контенту.' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
