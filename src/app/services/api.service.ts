import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);

  readonly baseUrl = environment.apiBaseUrl.replace(/\/?$/, '/');

  ping(): Observable<unknown> {
    return this.http.get(this.baseUrl);
  }
}
