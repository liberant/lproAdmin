import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Nav, Platform } from 'ionic-angular';

import { HomePage } from '../pages/home/home';

@Component({
    templateUrl: 'app.html',
})
export class LpAdminApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = HomePage;

    pages: { title: string, component: any }[];

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();

        this.pages = [
            { title: 'Dashboard', component: HomePage },
            { title: 'Businesses', component: 'BusinessesPage' },
            { title: 'Users', component: 'UsersPage' },
            { title: 'Products', component: 'ProductsPage' },
            { title: 'Winelists', component: 'WinelistsPage' },
            { title: 'Orders', component: 'OrdersPage' },
            { title: 'Settings', component: 'SettingsPage' },
            ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
