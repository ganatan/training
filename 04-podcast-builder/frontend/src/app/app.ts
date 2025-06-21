import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AiService } from './ai-service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  name = 'ridley scott';
  type = 'biography';
  style = 'neutral';
  length = 'short';
  topic = '';
  speakerProgress = 0;
  speakerDuration = 0;
  speakerCount = 0;
  speakerLoading = false;

  speaker: {
    moderator: {
      name: string;
      role: string;
      stance: string;
      personality: string;
    };
    items: {
      name: string;
      role: string;
      stance: string;
      personality: string;
    }[];
  } | null = null;

  useMock = environment.useMock;

  private aiService = inject(AiService);

  toggleTheme() {
    const body = document.querySelector('body');
    if (body) {
      document.body.classList.toggle('dark-mode');
      document.documentElement.classList.toggle('dark-mode');
    }
  }

  loadSpeaker() {
    const start = performance.now();
    const interval = this.startSpeakerProgress();
    this.speaker = null;
    this.speakerLoading = true;
    let speakerCount = 4;
    this.speakerCount = 0;
    this.aiService
      .generateSpeaker(this.topic, speakerCount)
      .subscribe((response) => {
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
              personality: response.error || 'Erreur inconnue',
            },
            items: [],
          };

          return;
        }
        this.speaker = response.data;
        this.speakerCount = this.speaker.items.length + 1;
      });
  }

  startSpeakerProgress() {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      if (progress >= 95) return;
      else this.speakerProgress = progress;
    }, 100);

    return interval;
  }

}
