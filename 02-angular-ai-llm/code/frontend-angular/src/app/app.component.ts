import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { PersonService, BiographyResponse } from './person.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'ridley scott'
  length = 'short'
  style = 'neutral'

  biographyChatGPT = ''
  biographyClaude = ''
  chatgptLoading = false
  claudeLoading = false

  chatgptDuration = 0
  claudeDuration = 0

  constructor(private personService: PersonService) { }

  loadBiography(llm: 'chatgpt' | 'claude') {
    const start = performance.now()

    if (llm === 'chatgpt') {
      this.biographyChatGPT = ''
      this.chatgptLoading = true
    } else {
      this.biographyClaude = ''
      this.claudeLoading = true
    }

    this.personService
      .postBiography(llm, this.name, this.length, this.style)
      .subscribe((response: BiographyResponse) => {
        const duration = (performance.now() - start) / 1000

        if (llm === 'chatgpt') {
          this.biographyChatGPT = response.data
          this.chatgptDuration = duration
          this.chatgptLoading = false
        } else {
          this.biographyClaude = response.data
          this.claudeDuration = duration
          this.claudeLoading = false
        }
      })
  }
}
