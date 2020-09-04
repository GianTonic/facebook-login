import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private nativeStorage: NativeStorage,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.nativeStorage.getItem('facebook_user')
      this.statusBar.styleDefault();
      this.router.navigateByUrl('login');
    });
  }
}
