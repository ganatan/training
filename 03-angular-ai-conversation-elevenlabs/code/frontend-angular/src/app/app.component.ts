import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { PersonService, BiographyResponse } from './person.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  name = 'ridley scott'
  length = 'short'
  style = 'neutral'

  biographyChatGPT = ''
  biographyClaude = ''
  chatgptLoading = false;
  claudeLoading = false;

  constructor(private personService: PersonService) { }

  loadBiography(llm: 'chatgpt' | 'claude') {
    if (llm === 'chatgpt') {
      this.chatgptLoading = true;
    } else {
      this.claudeLoading = true;
    }
    this.personService.postBiography(llm, this.name, this.length, this.style).subscribe((response: BiographyResponse) => {
      console.log('00000000001:' + JSON.stringify(response));
      if (llm === 'chatgpt') {
        this.biographyChatGPT = response.data
      } else {
        this.biographyClaude = response.data
      }
      this.chatgptLoading = false;
      this.claudeLoading = false;
    })
  }
}
