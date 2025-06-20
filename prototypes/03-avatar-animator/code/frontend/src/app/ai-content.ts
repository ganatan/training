import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { reply as mockReply } from './ai-content.mock';

export interface ContentGenerationResponse {
  success: boolean;
  llm: string;
  data: string;
  error?: string;
}

export interface VoiceGenerationResponse {
  success: boolean;
  llm: string;
  data: string;
}

export interface VideoGenerationResponse {
  success: boolean;
  llm: string;
  data: string;
}

@Injectable({ providedIn: 'root' })
export class AiContentService {
  private baseUrl = 'http://localhost:3000/api';
  private http = inject(HttpClient);

  generateContent(llm: string, name: string, length: string, style: string, type: string): Observable<ContentGenerationResponse> {
    if (environment.useMock) {
      const mockData = mockReply(type, { llm, name, length, style });

      return of({ success: true, llm: llm, data: mockData }).pipe(delay(1000));
    }

    const url = `${this.baseUrl}/llm/${type}/${llm}`;

    return this.http.post<ContentGenerationResponse>(url, { name, length, style })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Erreur API:', error);

          return of({
            success: false,
            llm: llm,
            data: '',
            error: this.getErrorMessage(error),
          });
        }),
      );
  }

  generateVoice(llm: string, name: string, length: string, style: string, type: string): Observable<VoiceGenerationResponse> {
    if (environment.useMock) {
      const mockData = mockReply(type, { llm, name, length, style });

      return of({ success: true, llm:llm, data: mockData }).pipe(delay(1000));
    }

    const url = `${this.baseUrl}/voice/${llm}`;

    return this.http.post<VoiceGenerationResponse>(url, { name, length, style })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Erreur API:', error);

          return of({
            success: false,
            llm: llm,
            data: '',
            error: this.getErrorMessage(error),
          });
        }),
      );

  }

  generateVideo(llm: string, name: string, length: string, style: string, type: string): Observable<VideoGenerationResponse> {
    if (environment.useMock) {
      const mockData = mockReply(type, { llm, name, length, style });

      return of({ success: true, llm:llm, data: mockData }).pipe(delay(1000));
    }

    const url = `${this.baseUrl}/video/${llm}`;

    return this.http.post<VideoGenerationResponse>(url, { name, length, style })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Erreur API:', error);

          return of({
            success: false,
            llm: llm,
            data: '',
            error: this.getErrorMessage(error),
          });
        }),
      );

  }

  private getErrorMessage(error: HttpErrorResponse): string {
    if (error.status === 0) {
      return 'Serveur inaccessible. Vérifiez votre connexion.';
    }

    return `Erreur ${error.status}: ${error.message}`;
  }

}

