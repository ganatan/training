import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { PersonService, BiographyResponse } from './person.service'

import { environment } from '../environments/environment';

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
  chatgptProgress = 0
  claudeProgress = 0
  useMock = environment.useMock;

  constructor(private personService: PersonService) { }

  // loadBiography(llm: 'chatgpt' | 'claude') {
  //   const start = performance.now()

  //   if (llm === 'chatgpt') {
  //     this.biographyChatGPT = ''
  //     this.chatgptLoading = true
  //   } else {
  //     this.biographyClaude = ''
  //     this.claudeLoading = true
  //   }

  //   this.personService
  //     .postBiography(llm, this.name, this.length, this.style)
  //     .subscribe((response: BiographyResponse) => {
  //       const duration = (performance.now() - start) / 1000

  //       if (llm === 'chatgpt') {
  //         this.biographyChatGPT = response.data
  //         this.chatgptDuration = duration
  //         this.chatgptLoading = false
  //       } else {
  //         this.biographyClaude = response.data
  //         this.claudeDuration = duration
  //         this.claudeLoading = false
  //       }
  //     })
  // }

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
      .postBiography(llm, this.name, this.length, this.style)
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

  onStyleChange(newStyle: string) {
    this.style = newStyle
    this.resetBiographies()
  }

  onLengthChange(newLength: string) {
    this.length = newLength
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
      if (progress >= 95) return // ne pas aller jusqu'à 100
      if (llm === 'chatgpt') this.chatgptProgress = progress
      else this.claudeProgress = progress
    }, 100)

    return interval
  }

}
