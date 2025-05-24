import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { PersonService, BiographyResponse } from './person.service'
import { environment } from '../environments/environment'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'ridley scott'
  type = 'biography'
  style = 'neutral'
  length = 'short'

  biographyChatGPT = ''
  biographyClaude = ''

  chatgptLoading = false
  claudeLoading = false

  chatgptDuration = 0
  claudeDuration = 0
  chatgptProgress = 0
  claudeProgress = 0

  useMock = environment.useMock

  styleOptions = [
    { value: 'casual', label: 'Décontracté' },
    { value: 'cinematic', label: 'Cinématographique' },
    { value: 'dialog', label: 'Dialogué' },
    { value: 'dramatic', label: 'Dramatique' },
    { value: 'emotional', label: 'Émotionnel' },
    { value: 'historical', label: 'Historique' },
    { value: 'humorous', label: 'Humoristique' },
    { value: 'inspirational', label: 'Inspirant' },
    { value: 'interview', label: 'Interview fictive' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'minimal', label: 'Minimaliste' },
    { value: 'narrative', label: 'Narratif' },
    { value: 'neutral', label: 'Neutre' },
    { value: 'poetic', label: 'Poétique' },
    { value: 'press', label: 'Journalistique' },
    { value: 'satirical', label: 'Satirique' },
    { value: 'scientific', label: 'Scientifique' },
    { value: 'technical', label: 'Technique' }
  ]

  constructor(private personService: PersonService) { }

  toggleTheme() {
    const body = document.querySelector('body')
    if (body) {
      console.log('00000000001');
      body.classList.toggle('dark-mode')
    }
  }

  loadBiography(llm: 'chatgpt' | 'claude') {
    const start = performance.now()
    const interval = this.startProgress(llm)

    if (llm === 'chatgpt') {
      this.biographyChatGPT = ''
      this.chatgptLoading = true
      this.chatgptProgress = 0
    } else {
      this.biographyClaude = ''
      this.claudeLoading = true
      this.claudeProgress = 0
    }

    this.personService
      .postBiography(llm, this.name, this.length, this.style, this.type)
      .subscribe((response: BiographyResponse) => {
        const duration = (performance.now() - start) / 1000
        clearInterval(interval)

        if (llm === 'chatgpt') {
          this.biographyChatGPT = response.data
          this.chatgptDuration = duration
          this.chatgptLoading = false
          this.chatgptProgress = 100
        } else {
          this.biographyClaude = response.data
          this.claudeDuration = duration
          this.claudeLoading = false
          this.claudeProgress = 100
        }
      })
  }

  resetBiography(llm: 'chatgpt' | 'claude') {
    if (llm === 'chatgpt') {
      this.biographyChatGPT = ''
      this.chatgptDuration = 0
      this.chatgptProgress = 0
    } else {
      this.biographyClaude = ''
      this.claudeDuration = 0
      this.claudeProgress = 0
    }
  }

  onStyleChange(value: string) {
    this.style = value
    this.resetBiographies()
  }

  onLengthChange(value: string) {
    this.length = value
    this.resetBiographies()
  }

  onTypeChange(value: string) {
    this.name = ''
    this.type = value
    this.resetBiographies()
  }

  private resetBiographies() {
    this.biographyChatGPT = ''
    this.biographyClaude = ''
    this.chatgptDuration = 0
    this.claudeDuration = 0
  }

  startProgress(llm: 'chatgpt' | 'claude') {
    let progress = 0
    const interval = setInterval(() => {
      progress += 5
      if (progress >= 95) return
      if (llm === 'chatgpt') this.chatgptProgress = progress
      else this.claudeProgress = progress
    }, 100)
    return interval
  }
}
