import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  AiService,
} from './ai-service';
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

  contentChatgpt = '';
  contentClaude = '';
  chatgptLoading = false;
  claudeLoading = false;

  videoChatgptKey = false;

  voiceChatgpt = '';
  voiceClaude = '';
  voiceChatgptLoading = false;
  voiceClaudeLoading = false;

  videoChatgpt = '';
  videoPosterChatgpt = '';
  videoClaude = '';
  videoPosterClaude = '';
  videoChatgptLoading = false;
  videoClaudeLoading = false;

  speakersProgress = 0;
  speakersDuration = 0;
  speakersCount = 0;

  speakers: {
    moderator: {
      name: string;
      role: string;
      stance: string;
      personality: string;
    };
    speakers: {
      name: string;
      role: string;
      stance: string;
      personality: string;
    }[];
  } | null = null;

  speakersLoading = false;

  chatgptDuration = 0;
  claudeDuration = 0;
  chatgptProgress = 0;
  claudeProgress = 0;

  voiceChatgptDuration = 0;
  voiceClaudeDuration = 0;
  voiceChatgptProgress = 0;
  voiceClaudeProgress = 0;

  videoChatgptDuration = 0;
  videoClaudeDuration = 0;
  videoChatgptProgress = 0;
  videoClaudeProgress = 0;

  useMock = environment.useMock;

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
    { value: 'technical', label: 'Technique' },
  ];

  private aiService = inject(AiService);

  toggleTheme() {
    const body = document.querySelector('body');
    if (body) {
      document.body.classList.toggle('dark-mode');
      document.documentElement.classList.toggle('dark-mode');
    }
  }

  loadSpeakers() {
    console.log('00000000001');
    const start = performance.now();
    const interval = this.startSpeakersProgress();
    this.speakers = null;
    this.speakersLoading = true;
    let topic = '1111';
    let speakerCount = 4;
    this.speakersCount = 0;
    this.aiService
      .generateSpeakers(topic, speakerCount)
      .subscribe((response) => {
        console.log('00000000001:' + JSON.stringify(response));
        const duration = (performance.now() - start) / 1000;
        clearInterval(interval);
        this.speakersLoading = false;
        this.speakersDuration = duration;
        this.speakersProgress = 100;

        if (!response.success) {
          this.speakers = {
            moderator: {
              name: 'Erreur',
              role: '',
              stance: '',
              personality: response.error || 'Erreur inconnue',
            },
            speakers: [],
          };
          return;
        }
        this.speakers = response.data;
        console.log('00000000002:' + JSON.stringify(this.speakers));
        this.speakersCount = this.speakers.speakers.length + 1;
      });
  }

  resetContent(llm: 'chatgpt' | 'claude') {
    if (llm === 'chatgpt') {
      this.contentChatgpt = '';
      this.chatgptDuration = 0;
      this.chatgptProgress = 0;
      this.voiceChatgpt = '';
      this.voiceChatgptDuration = 0;
      this.videoChatgpt = '';
      this.videoChatgptDuration = 0;
    } else {
      this.contentClaude = '';
      this.claudeDuration = 0;
      this.claudeProgress = 0;
      this.voiceClaude = '';
      this.voiceClaudeDuration = 0;
      this.videoClaude = '';
      this.videoClaudeDuration = 0;
    }
  }

  onStyleChange(value: string) {
    this.style = value;
    this.resetAll();
  }

  onLengthChange(value: string) {
    this.length = value;
    this.resetAll();
  }

  onTypeChange(value: string) {
    this.type = value;
    this.name = this.useMock
      ? value === 'biography' ? 'Ridley Scott' : 'Alien'
      : '';
    this.resetAll();
  }

  private resetAll() {
    this.contentChatgpt = '';
    this.contentClaude = '';
    this.chatgptDuration = 0;
    this.claudeDuration = 0;
    this.chatgptProgress = 0;
    this.claudeProgress = 0;
    this.voiceChatgpt = '';
    this.voiceClaude = '';
  }

  startProgress(llm: 'chatgpt' | 'claude') {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      if (progress >= 95) return;
      if (llm === 'chatgpt') this.chatgptProgress = progress;
      else this.claudeProgress = progress;
    }, 100);

    return interval;
  }


  startVoiceProgress(llm: 'chatgpt' | 'claude') {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      if (progress >= 95) return;
      if (llm === 'chatgpt') this.voiceChatgptProgress = progress;
      else this.voiceClaudeProgress = progress;
    }, 100);

    return interval;
  }

  startVideoProgress(llm: 'chatgpt' | 'claude') {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      if (progress >= 95) return;
      if (llm === 'chatgpt') this.voiceChatgptProgress = progress;
      else this.voiceClaudeProgress = progress;
    }, 100);

    return interval;
  }


  startSpeakersProgress() {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      if (progress >= 95) return;
      else this.speakersProgress = progress;
    }, 100);

    return interval;
  }

}
