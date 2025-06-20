import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  AiContentService,
  ContentGenerationResponse,
  VoiceGenerationResponse,
  VideoGenerationResponse,
} from './ai-content';
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

  voiceChatgpt = '';
  voiceClaude = '';
  voiceChatgptLoading = false;
  voiceClaudeLoading = false;

  videoChatgpt = '';
  videoClaude = '';
  videoChatgptLoading = false;
  videoClaudeLoading = false;

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

  private aiContentService = inject(AiContentService);

  toggleTheme() {
    const body = document.querySelector('body');
    if (body) {
      document.body.classList.toggle('dark-mode');
      document.documentElement.classList.toggle('dark-mode');
    }
  }

  loadContent(llm: 'chatgpt' | 'claude') {
    const start = performance.now();
    const interval = this.startProgress(llm);
    if (llm === 'chatgpt') {
      this.contentChatgpt = '';
      this.chatgptLoading = true;
      this.chatgptProgress = 0;
      this.voiceChatgpt = '';
      this.chatgptDuration = 0;
      this.voiceChatgptDuration = 0;
    } else {
      this.contentClaude = '';
      this.claudeLoading = true;
      this.claudeProgress = 0;
      this.voiceClaude = '';
      this.claudeDuration = 0;
      this.voiceClaudeDuration = 0;
    }

    this.aiContentService
      .generateContent(llm, this.name, this.length, this.style, this.type)
      .subscribe((response: ContentGenerationResponse) => {
        const duration = (performance.now() - start) / 1000;
        clearInterval(interval);
        let data = response.data;
        if (!response.success) {
          data = response.error || 'Erreur inconnue';
        }
        if (llm === 'chatgpt') {
          this.contentChatgpt = data;
          this.chatgptDuration = duration;
          this.chatgptLoading = false;
          this.chatgptProgress = 100;
        } else {
          this.contentClaude = data;
          this.claudeDuration = duration;
          this.claudeLoading = false;
          this.claudeProgress = 100;
        }
      });
  }

  resetContent(llm: 'chatgpt' | 'claude') {
    if (llm === 'chatgpt') {
      this.contentChatgpt = '';
      this.chatgptDuration = 0;
      this.chatgptProgress = 0;
      this.voiceChatgpt = '';
      this.voiceChatgptDuration = 0;
    } else {
      this.contentClaude = '';
      this.claudeDuration = 0;
      this.claudeProgress = 0;
      this.voiceClaude = '';
      this.voiceClaudeDuration = 0;
    }
  }

  loadVoice(llm: 'chatgpt' | 'claude') {
    const start = performance.now();
    const interval = this.startVoiceProgress(llm);
    if (llm === 'chatgpt') {
      this.voiceChatgptLoading = true;
      this.voiceChatgpt = '';
      this.voiceChatgptDuration = 0;
      this.voiceChatgptProgress = 0;
    } else {
      this.voiceClaudeLoading = true;
      this.voiceClaude = '';
      this.voiceClaudeDuration = 0;
      this.voiceClaudeProgress = 0;
    }
    this.aiContentService
      .generateVoice(llm, this.name, this.length, this.style, this.type)
      .subscribe((response: VoiceGenerationResponse) => {
        const duration = (performance.now() - start) / 1000;
        clearInterval(interval);
        let data = response.data;
        if (!response.success) {
          data = response.error || 'Erreur inconnue';
        }
        const voiceMock = `assets/voices/ridley-scott-${llm}.mp3`;
        if (llm === 'chatgpt') {
          this.voiceChatgpt = this.useMock ? voiceMock : data;
          this.voiceChatgptDuration = duration;
          this.voiceChatgptLoading = false;
          this.voiceChatgptProgress = 100;
        } else {
          this.voiceClaude = this.useMock ? voiceMock : data;
          this.voiceClaudeDuration = duration;
          this.voiceClaudeLoading = false;
          this.voiceClaudeProgress = 100;
        }
      });
  }

  loadVideo(llm: 'chatgpt' | 'claude') {
    const start = performance.now();
    const interval = this.startVideoProgress(llm);
    if (llm === 'chatgpt') {
      this.videoChatgptLoading = true;
      this.videoChatgpt = '';
      this.videoChatgptDuration = 0;
      this.videoChatgptProgress = 0;
    } else {
      this.videoClaudeLoading = true;
      this.videoClaude = '';
      this.videoClaudeDuration = 0;
      this.videoClaudeProgress = 0;
    }
    this.aiContentService
      .generateVideo(llm, this.name, this.length, this.style, this.type)
      .subscribe((response: VideoGenerationResponse) => {
        const duration = (performance.now() - start) / 1000;
        clearInterval(interval);
        const videoMock = 'assets/videos/ridley-scott.mp3';
        let data = response.data;
        if (!response.success) {
          data = response.error || 'Erreur inconnue';
        }
        if (llm === 'chatgpt') {
          this.videoChatgpt = this.useMock ? videoMock : data;
          this.videoChatgptDuration = duration;
          this.videoChatgptLoading = false;
          this.videoChatgptProgress = 100;
        } else {
          this.videoClaude = this.useMock ? videoMock : data;
          this.videoClaudeDuration = duration;
          this.videoClaudeLoading = false;
          this.videoClaudeProgress = 100;
        }
      });
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
}
