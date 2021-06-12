import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ChatApplicationExample';
  open = true;
  login = false;
  // tslint:disable-next-line:typedef
  loggedinHandler(loggedin: boolean){
      this.login = loggedin;
    }
}
