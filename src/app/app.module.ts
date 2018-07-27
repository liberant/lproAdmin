import { ErrorHandler, Injectable, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Pro } from '@ionic/pro';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { NgPipesModule } from 'ngx-pipes';

import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { FirestoreProvider } from '../providers/firestore/firestore';

import { LpAdminApp } from './app.component';
import { firebaseConfig } from './credentials';

Pro.init('91275B1A', {
    appVersion: '0.0.1',
});

@Injectable()
export class MyErrorHandler implements ErrorHandler {
    ionicErrorHandler: IonicErrorHandler;

    constructor(injector: Injector) {
        try {
            this.ionicErrorHandler = injector.get(IonicErrorHandler);
        } catch (e) {
            // Unable to get the IonicErrorHandler provider, ensure
            // IonicErrorHandler has been added to the providers list below
        }
    }

    handleError(err: any): void {
        Pro.monitoring.handleNewError(err);
        // Remove this if you want to disable Ionic's auto exception handling
        // in development mode.
        this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
    }
}

@NgModule({
    declarations: [ LpAdminApp, HomePage ],
    imports: [ BrowserModule, IonicModule.forRoot(LpAdminApp), AngularFireModule.initializeApp(firebaseConfig), AngularFireAuthModule, AngularFirestoreModule.enablePersistence(), AngularFireStorageModule, NgPipesModule,

    ],
    bootstrap: [ IonicApp ],
    entryComponents: [ LpAdminApp, HomePage ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        AuthProvider,
        FirestoreProvider, // IonicErrorHandler,
    ],
})
export class AppModule {
}
