// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
//
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {SharedModule} from './shared';
//
// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     SharedModule,
//     BrowserAnimationsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }



import { BrowserModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgModule } from '@angular/core';
import { CoreModule } from './core';
import { SharedModule } from './shared';
import { LoginModule } from './login';
import { AppComponent } from './core/containers/app';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'taskmgr' }),
    TransferHttpCacheModule,
    SharedModule,
    LoginModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

