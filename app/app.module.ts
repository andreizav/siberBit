import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LearningComponent } from './learning/learning.component';
import { GroupComponent } from './learning/components/groups/group.component';
import { PeriodComponent } from './learning/components/period/period.component';
import { ProtocolComponent } from './learning/components/protocols/protocol.component';
import { SummaryComponent } from './learning/components/summary/summary.component';

import { LearningService } from './learning/learning.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    LearningComponent,
    GroupComponent,
    PeriodComponent,
    ProtocolComponent,
    SummaryComponent
  ],
  providers: [
    LearningService
  ]
})
export class AppModule {}
