import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StyleOneComponent } from './style-one/style-one.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BackgroundComponent } from './background/background.component';
import { ModelsComponent } from './models/models.component';
import { EventsComponent } from './events/events.component';
import { CommunityComponent } from './community/community.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestrideComponent } from './testride/testride.component';
import { DecimalPipe } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { RatingComponent } from './rating/rating.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleOneComponent,
    BackgroundComponent,
    ModelsComponent,
    EventsComponent,
    CommunityComponent,
    TestrideComponent,
    ModalComponent,
    RatingComponent,
    DatepickerComponent,
    TimepickerComponent,
    OffcanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
