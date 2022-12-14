import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  header='angular'
  constructor() {}
  ngOnInit(): void {}
  FunctionClick(name: string) {
    alert(name);
  }
}
