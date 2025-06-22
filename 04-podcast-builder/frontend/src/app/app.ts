import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AiService, SpeakerData, QuestionData, DialogueData } from './ai-service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  topic = 'Angular vs React';
  topicSpeakerCount = 4;
  topicQuestionCount = 7;

  speakerProgress = 0;
  speakerDuration = 0;
  speakerCount = 0;
  speakerLoading = false;

  questionProgress = 0;
  questionDuration = 0;
  questionCount = 0;
  questionLoading = false;

  dialogueProgress = 0;
  dialogueDuration = 0;
  dialogueLoading = false;

  speaker: SpeakerData | null = null;
  question: QuestionData | null = null;
  dialogue: DialogueData | null = null;

  useMock = environment.useMock;

  private aiService = inject(AiService);

  toggleTheme() {
    const body = document.querySelector('body');
    if (body) {
      body.classList.toggle('dark-mode');
      document.documentElement.classList.toggle('dark-mode');
    }
  }

  loadSpeakers() {
    const start = performance.now();
    const interval = this.startProgress('speaker');

    this.speaker = null;
    this.speakerLoading = true;

    this.aiService.generateSpeakers(this.topic, this.topicSpeakerCount).subscribe((response) => {
      const duration = (performance.now() - start) / 1000;
      clearInterval(interval);
      this.speakerLoading = false;
      this.speakerDuration = duration;
      this.speakerProgress = 100;

      if (!response.success) {
        this.speaker = {
          moderator: {
            name: 'Erreur',
            role: '',
            stance: '',
            personality: '',
            voiceId: { id: '', name: '' },
            avatarId: { id: -1, name: '' },
          },
          items: [],
        };
        return;
      }

      this.speaker = response.data;
      this.speakerCount = this.speaker.items.length + 1;
    });
  }

  loadQuestions() {
    const start = performance.now();
    const interval = this.startProgress('question');

    this.question = null;
    this.questionLoading = true;

    this.aiService.generateQuestions(this.topic, this.topicQuestionCount).subscribe((response) => {
      const duration = (performance.now() - start) / 1000;
      clearInterval(interval);
      this.questionLoading = false;
      this.questionDuration = duration;
      this.questionProgress = 100;

      if (!response.success) {
        this.question = {
          topic: this.topic,
          items: [`Erreur : ${response.error || 'Erreur inconnue'}`],
        };
        return;
      }

      this.question = response.data;
      this.questionCount = this.question.items.length;
    });
  }

  loadDialogues() {
    if (!this.speaker || !this.question || this.speaker.items.length === 0 || this.question.items.length === 0) {
      console.warn('Speakers ou questions manquants');
      return;
    }

    const start = performance.now();
    const interval = this.startProgress('dialogue');

    this.dialogue = null;
    this.dialogueLoading = true;

    this.aiService
      .generateDialogues(this.topic, this.question.items, this.speaker.items)
      .subscribe((response) => {
        const duration = (performance.now() - start) / 1000;
        clearInterval(interval);
        this.dialogueLoading = false;
        this.dialogueDuration = duration;
        this.dialogueProgress = 100;

        if (!response.success) {
          this.dialogue = {
            topic: this.topic,
            exchanges: [
              {
                speaker: 'Erreur',
                role: '',
                text: response.error || 'Erreur inconnue',
              },
            ],
          };
          return;
        }

        this.dialogue = response.data;
      });
  }

  startProgress(type: 'speaker' | 'question' | 'dialogue') {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      if (progress >= 95) return;
      if (type === 'speaker') this.speakerProgress = progress;
      else if (type === 'question') this.questionProgress = progress;
      else this.dialogueProgress = progress;
    }, 100);

    return interval;
  }
}


// import { Component, inject } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// import { AiService } from './ai-service';
// import { environment } from '../environments/environment';

// @Component({
//   selector: 'app-root',
//   imports: [FormsModule, CommonModule],
//   templateUrl: './app.html',
//   styleUrl: './app.css',
// })
// export class App {
//   topic = 'Angular vs React';
//   topicSpeakerCount = 4;
//   topicQuestionCount = 7;

//   speakerProgress = 0;
//   speakerDuration = 0;
//   speakerCount = 0;
//   speakerLoading = false;

//   questionProgress = 0;
//   questionDuration = 0;
//   questionCount = 0;
//   questionLoading = false;

//   dialogueProgress = 0;
//   dialogueDuration = 0;
//   dialogueLoading = false;

//   speaker: {
//     moderator: {
//       name: string;
//       role: string;
//       stance: string;
//       personality: string;
//     };
//     items: {
//       name: string;
//       role: string;
//       stance: string;
//       personality: string;
//     }[];
//   } | null = null;

//   question: {
//     topic: string;
//     items: string[];
//   } | null = null;

//   dialogue: {
//     topic: string;
//     exchanges: {
//       speaker: string;
//       role: string;
//       text: string;
//       question?: string;
//     }[];
//   } | null = null;

//   useMock = environment.useMock;

//   private aiService = inject(AiService);

//   toggleTheme() {
//     const body = document.querySelector('body');
//     if (body) {
//       document.body.classList.toggle('dark-mode');
//       document.documentElement.classList.toggle('dark-mode');
//     }
//   }

//   loadSpeakers() {
//     const start = performance.now();
//     const interval = this.startProgress('speaker');
//     this.speaker = null;
//     this.speakerLoading = true;
//     this.aiService.generateSpeakers(this.topic, this.topicSpeakerCount).subscribe((response) => {
//       const duration = (performance.now() - start) / 1000;
//       clearInterval(interval);
//       this.speakerLoading = false;
//       this.speakerDuration = duration;
//       this.speakerProgress = 100;

//       if (!response.success) {
//         this.speaker = {
//           moderator: {
//             name: 'Erreur',
//             role: '',
//             stance: '',
//             personality: response.error || 'Erreur inconnue',
//           },
//           items: [],
//         };
//         return;
//       }

//       this.speaker = response.data;
//       this.speakerCount = this.speaker.items.length + 1;
//     });
//   }

//   loadQuestions() {
//     const start = performance.now();
//     const interval = this.startProgress('question');
//     this.question = null;
//     this.questionLoading = true;
//     this.questionCount = 4;

//     this.aiService.generateQuestions(this.topic, this.topicQuestionCount).subscribe((response) => {
//       const duration = (performance.now() - start) / 1000;
//       clearInterval(interval);
//       this.questionLoading = false;
//       this.questionDuration = duration;
//       this.questionProgress = 100;

//       if (!response.success) {
//         this.question = {
//           topic: this.topic,
//           items: [`Erreur : ${response.error || 'Erreur inconnue'}`],
//         };
//         return;
//       }

//       this.question = response.data;
//       this.questionCount = this.question.items.length;
//     });
//   }

//   loadDialogues() {
//     if (!this.speaker || !this.question || this.speaker.items.length === 0 || this.question.items.length === 0) {
//       console.warn('Speakers ou questions manquants');
//       return;
//     }

//     const start = performance.now();
//     const interval = this.startProgress('dialogue');
//     this.dialogue = null;
//     this.dialogueLoading = true;

//     this.aiService
//       .generateDialogues(this.topic, this.question.items, this.speaker.items)
//       .subscribe((response) => {
//         const duration = (performance.now() - start) / 1000;
//         clearInterval(interval);
//         this.dialogueLoading = false;
//         this.dialogueDuration = duration;
//         this.dialogueProgress = 100;

//         if (!response.success) {
//           this.dialogue = {
//             topic: this.topic,
//             exchanges: [
//               {
//                 speaker: 'Erreur',
//                 role: '',
//                 text: response.error || 'Erreur inconnue',
//               },
//             ],
//           };
//           return;
//         }

//         this.dialogue = response.data;
//       });
//   }

//   startProgress(type: 'speaker' | 'question' | 'dialogue') {
//     let progress = 0;
//     const interval = setInterval(() => {
//       progress += 5;
//       if (progress >= 95) return;
//       if (type === 'speaker') this.speakerProgress = progress;
//       else if (type === 'question') this.questionProgress = progress;
//       else this.dialogueProgress = progress;
//     }, 100);

//     return interval;
//   }
// }
