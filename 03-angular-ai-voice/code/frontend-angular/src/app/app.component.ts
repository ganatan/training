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

  audioChatGPT = ''
  audioClaude = ''

  chatgptLoading = false
  claudeLoading = false

  constructor(private personService: PersonService) { }

  loadBiography(llm: 'chatgpt' | 'claude') {
    if (llm === 'chatgpt') {
      this.chatgptLoading = true
    } else {
      this.claudeLoading = true
    }

    this.personService
      .postBiography(llm, this.name, this.length, this.style)
      .subscribe((response: BiographyResponse) => {
        console.log('BIO:', response)
        if (llm === 'chatgpt') {
          this.biographyChatGPT = response.data
        } else {
          this.biographyClaude = response.data
        }

        this.chatgptLoading = false
        this.claudeLoading = false
      })
  }

  loadVoice(llm: 'chatgpt' | 'claude') {
    if (llm === 'chatgpt') {
      this.chatgptLoading = true
    } else {
      this.claudeLoading = true
    }

    this.personService
      .postVoice(llm, this.name, this.length, this.style)
      .subscribe((response: BiographyResponse) => {
        console.log('VOICE:', response)
        if (llm === 'chatgpt') {
          this.biographyChatGPT = response.data;
          this.audioChatGPT = response.audioUrl!;
        } else {
          this.biographyClaude = response.data;
          this.audioClaude = response.audioUrl!;
        }

        this.chatgptLoading = false
        this.claudeLoading = false
      })
  }

  playAudio(url: string) {
    console.log('00000000001:' + url);
    const audio = new Audio(url)
    audio.play()
  }

  reset(llm: 'chatgpt' | 'claude') {
    if (llm === 'chatgpt') {
      this.biographyChatGPT = ''
      this.audioChatGPT = ''
    } else {
      this.biographyClaude = ''
      this.audioClaude = ''
    }
  }
}
