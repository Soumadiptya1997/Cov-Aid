import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Cov-Aid';
  public CovLog: any;
  public loginFlag: boolean = false;
  constructor(public cookieS: CookieService) {
    this.CovLog = this.cookieS.get('LOGINCOV');
    console.log(this.CovLog);
    if (this.cookieS.check('LOGINOV')) {
      this.loginFlag = true;
    } else {
      this.loginFlag = false;
    }
  }

  loginFunc() {
    this.cookieS.set('LOGINCOV', 'COVAID');
    this.loginFlag = true;
  }

  logoutFunc() {
    this.cookieS.deleteAll();
    this.loginFlag = false;
  }
}
