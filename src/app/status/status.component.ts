import { Component } from '@angular/core';

@Component({
  selector: 'app-status',
  template: `
    <h4>
      404 Error. Requested page not found!
    </h4>
  `,
  styles: [
    "h4{color:red;font-size:54px}"
  ]
})
export class StatusComponent {

}
