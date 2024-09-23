import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:3000/api/email';

  constructor(private http: HttpClient) { }

  sendEmail(emailData: { to: string; subject: string; text: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/send`, emailData);
  }
}
