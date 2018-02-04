import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'payweb-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Bem-vindo ao Payfast!'

  constructor() { }

  ngOnInit() {
  }

}
