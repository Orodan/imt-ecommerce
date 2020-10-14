import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component'
import { FooterComponent } from './footer/footer.component'
import { BeerComponent } from './beer/beer.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
 
@NgModule({
    declarations: [
        AppComponent, MenuComponent, FooterComponent, BeerComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
