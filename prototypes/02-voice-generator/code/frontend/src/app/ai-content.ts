import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';
import { reply as mockReply } from './ai-content.mock';

export interface TextGenerationResponse {
  success: boolean;
  llm: string;
  data: string;
}

@Injectable({ providedIn: 'root' })
export class AiContentService {
  private baseUrl = 'http://localhost:3000/api';
  private http = inject(HttpClient);

  generate(llm: string, name: string, length: string, style: string, type: string): Observable<TextGenerationResponse> {
    if (environment.useMock) {
      const mockData = mockReply(type, { llm, name, length, style });

      return of({ success: true, llm, data: mockData });
    }

    const url = `${this.baseUrl}/llm/${type}/${llm}`;

    return this.http.post<TextGenerationResponse>(url, { name, length, style });
  }


  postVoice(llm: string, name: string, length: string, style: string, type: string): Observable<TextGenerationResponse> {
    const url = `${this.baseUrl}/voice/${type}/${llm}`;

    return this.http.post<TextGenerationResponse>(url, { name, length, style });
  }

}
