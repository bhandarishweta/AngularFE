import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  private apiUrl = 'http://localhost:9091/api/v1/user/register';

  constructor(private httpClient: HttpClient) { }

  registerUser(user: any): Observable<any> {

    return this.httpClient.post<any>(this.apiUrl,user);
  }
}
