import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LeafletModule } from './leaflet';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DefaultDescriptionPipe } from './shared/pipes/default-description.pipe';

@NgModule({
    declarations: [AppComponent, SidebarComponent, FooterComponent, DefaultDescriptionPipe],
    imports: [BrowserModule, LeafletModule],
    bootstrap: [AppComponent],
})
export class AppModule { }
