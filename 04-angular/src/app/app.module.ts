import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LeafletModule } from './leaflet';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, LeafletModule],
    bootstrap: [AppComponent],
})
export class AppModule { }
