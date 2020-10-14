import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component'
import { FooterComponent } from './footer/footer.component'
import { BeerComponent } from './beer/beer.component'
 
@NgModule({
    declarations: [
        AppComponent, MenuComponent, FooterComponent, BeerComponent
    ],
    imports: [
        BrowserModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
