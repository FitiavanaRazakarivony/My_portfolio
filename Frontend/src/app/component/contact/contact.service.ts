import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:8080/api/email/send'; // URL de l'API

  constructor(private http: HttpClient) { }

  // Méthode pour envoyer l'email
  sendEmail(emailData: { to: string; subject: string; text: string }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Envoi de la requête POST avec les données d'email
    return this.http.post(this.apiUrl, emailData, { headers });
  }
}
