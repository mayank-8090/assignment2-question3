import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>"Marvellous Infosystems"
  <input type="text"></h1>`,
  styles: ['input[type=text]{background:blue}']
})
export class AppComponent {
  title = 'Marvellous Infosystem';
}
