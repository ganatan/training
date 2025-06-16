import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';
import { delay } from 'rxjs/operators';

import { reply as mockReply } from './ai-content.mock';

export interface ContentGenerationResponse {
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

      return of({ success: true, llm, data: mockData }).pipe(delay(1000));
    }

    const url = `${this.baseUrl}/llm/${type}/${llm}`;

    return this.http.post<ContentGenerationResponse>(url, { name, length, style });
  }
}
