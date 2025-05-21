import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

export interface BiographyResponse {
  success: boolean
  llm: string
  data: string
}

@Injectable({ providedIn: 'root' })
export class PersonService {
  constructor(private http: HttpClient) {}

  postBiography(llm: string, name: string, length: string, style: string): Observable<BiographyResponse> {
    return this.http.post<BiographyResponse>(
      `http://localhost:3000/api/ai/biography/${llm}`,
      { name, length, style }
    )
  }
}
