import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { DataInterceptor } from "./services/dataInterceptor";
import { AuthService } from "./services/auth.service";
import { AuthGaurd } from "./services/auth.gaurd";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthGaurd,
    AuthService,
    {
    provide:HTTP_INTERCEPTORS,
    useClass:DataInterceptor,
    multi:true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
