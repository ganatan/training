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
  length = 'medium'
  style = 'neutral'

  biographyChatGPT = ''
  biographyClaude = ''

  constructor(private personService: PersonService) {}

  loadBiography(llm: 'chatgpt' | 'claude') {
    this.personService.postBiography(llm, this.name, this.length, this.style).subscribe((response: BiographyResponse) => {
      if (response.success) {
        if (llm === 'chatgpt') {
          this.biographyChatGPT = response.data
        } else {
          this.biographyClaude = response.data
        }
      }
    })
  }
}

// import { Component } from '@angular/core'
// import { FormsModule } from '@angular/forms'
// import { CommonModule } from '@angular/common'
// import { PersonService } from './person.service'
// import { BiographyResponse } from './person.service'

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   templateUrl: './app.component.html'
// })
// export class AppComponent {
//   name = 'ridley scott'

//   biographyChatGPT = ''
//   biographyClaude = ''

//   constructor(private personService: PersonService) {}

//   loadBiography(llm: 'chatgpt' | 'claude') {
//     this.personService.postBiography(llm, this.name).subscribe((response: BiographyResponse) => {
//       if (response.success) {
//         if (llm === 'chatgpt') {
//           this.biographyChatGPT = response.data
//         } else {
//           this.biographyClaude = response.data
//         }
//       }
//     })
//   }
// }
