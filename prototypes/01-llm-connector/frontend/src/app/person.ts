import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

export interface BiographyResponse {
  success: boolean
  llm: string
  data: string
}

@Injectable({ providedIn: 'root' })
export class Person {
  private http = inject(HttpClient)

  postBiography(
    llm: string,
    name: string,
    length: string,
    style: string,
    type: string
  ): Observable<BiographyResponse> {
    const url = `http://localhost:3000/api/ai/${type}/${llm}`
    
    return this.http.post<BiographyResponse>(url, { name, length, style })
  }
}
