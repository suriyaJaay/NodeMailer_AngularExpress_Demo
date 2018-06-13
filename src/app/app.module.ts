import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatCardModule, MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClientService } from './client.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		HttpClientModule,
		MatInputModule,
		MatFormFieldModule,
		MatCardModule,
	],
	providers: [
		ClientService,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
