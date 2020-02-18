import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LeafletModule } from './leaflet';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DefaultDescriptionPipe } from './shared/pipes/default-description.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PlaygroundControlComponent } from './playground-control/playground-control.component';

@NgModule({
    declarations: [AppComponent, SidebarComponent, FooterComponent, DefaultDescriptionPipe, PlaygroundControlComponent],
    imports: [BrowserModule, HttpClientModule, LeafletModule, ReactiveFormsModule],
    bootstrap: [AppComponent],
})
export class AppModule { }
