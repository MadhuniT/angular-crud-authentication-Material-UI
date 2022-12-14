import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <h2>
      contact works!
    </h2>
    <a routerLink="add">add</a>
    <br>
    <a routerLink="edit/1">edit </a>
    <div><router-outlet></router-outlet></div>
  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

}
