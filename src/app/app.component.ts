import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thor-ui';
  todos = [
    { 
      id: 1,
      text: 'Servisler (Process task create read update)'
    },
    { id: 2,
      text: 'JWT ile login'
    },
    {
      id : 5,
      text: 'angularda sayfaların oluşturulması'
    }
  ];

  onSelect(item): void {
    alert(item.id);
  }
}
