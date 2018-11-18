import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { GridComponent } from './grid/grid.component';
import { ClientMetricComponent } from './client-metric/client-metric.component';
import { DataService } from './data.service';
import { MatButtonModule, MatCheckboxModule, MatSelectModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ClientMetricComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    GridModule,
    HttpClientModule,
    MatSelectModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
