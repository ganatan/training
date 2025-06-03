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

  postBiography(
    llm: string,
    name: string,
    length: string,
    style: string,
    type: string
  ): Observable<BiographyResponse> {
    let url = `http://localhost:3000/api/ai/${type}/${llm}`;
    console.log('00000000001:' + url);
    console.log('00000000001:' + name);
    console.log('00000000001:' + length);
    console.log('00000000001:' + style);
    return this.http.post<BiographyResponse>(
      url,
      { name, length, style }
    )
  }
}
