import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private readonly apiService = inject(ApiService);

  apiBaseUrl = this.apiService.baseUrl;
  statusMessage = '';
  isLoading = false;

  ngOnInit(): void {
    this.statusMessage = 'Listo para conectarse con la API.';
  }

  pingApi(): void {
    this.isLoading = true;
    this.statusMessage = 'Consultando el endpoint...';

    this.apiService
      .ping()
      .subscribe({
        next: (response) => {
          const formatted = typeof response === 'object' ? JSON.stringify(response) : `${response}`;
          this.statusMessage = `Respuesta recibida: ${formatted}`;
          this.isLoading = false;
        },
        error: (err) => {
          this.statusMessage = `No se pudo contactar la API: ${err.message ?? err}`;
          this.isLoading = false;
        }
      });
  }
}
