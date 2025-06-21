import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { reply as mockSpeakerReply } from './ai-speaker.mock';

export interface Speaker {
  name: string;
  role: string;
  stance: string;
  personality: string;
}

export interface SpeakerData {
  moderator: Speaker;
  items: Speaker[];
}

export interface SpeakerGenerationResponse {
  success: boolean;
  data: SpeakerData;
  error?: string;
}

export interface VideoData {
  url: string;
  poster: string;
}

@Injectable({ providedIn: 'root' })
export class AiService {
  private baseUrl = 'http://localhost:3000/api';
  private http = inject(HttpClient);

  generateSpeaker( topic: string, count: number): Observable<SpeakerGenerationResponse> {
    if (environment.useMock) {
      const mockData = mockSpeakerReply(topic, count);

      return of({
        success: true,
        data: mockData,
      }).pipe(delay(1000));
    }

    const url = `${this.baseUrl}/podcast/speaker`;

    return this.http.post<SpeakerGenerationResponse>(url, { topic, count }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Erreur API:', error);

        return of({
          success: false,
          data: { moderator: { name: '', role: '', stance: '', personality: '' }, items: [] },
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

