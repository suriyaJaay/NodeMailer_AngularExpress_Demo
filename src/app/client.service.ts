import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ClientService {
	httpHeader = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
		})
	};

	constructor(private http: HttpClient) { }

	sendEmail(clientData) {
		console.log(clientData);
		this.http.post('/send-email', clientData, this.httpHeader).subscribe((data) => {
		});
	}
}
