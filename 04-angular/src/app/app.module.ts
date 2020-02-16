import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LeafletModule } from './leaflet';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DefaultDescriptionPipe } from './shared/pipes/default-description.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent, SidebarComponent, FooterComponent, DefaultDescriptionPipe],
    imports: [BrowserModule, HttpClientModule, LeafletModule],
    bootstrap: [AppComponent],
})
export class AppModule { }
