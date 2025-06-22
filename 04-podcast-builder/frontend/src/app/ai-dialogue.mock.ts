import { DialogueData, DialogueExchange } from './ai-service';
import { Speaker } from './ai-service';

export function reply(
  topic: string,
  questions: string[],
  speakers: Speaker[]
): DialogueData {
  const exchanges: DialogueExchange[] = [];

  exchanges.push({
    speaker: 'Ganatan',
    role: 'Animateur',
    text: `Bienvenue dans ce podcast sur le thème : "${topic}". Commençons tout de suite.`,
  });

  questions.forEach((question, index) => {
    exchanges.push({
      speaker: 'Ganatan',
      role: 'Animateur',
      text: question,
      question,
    });

    const speaker1 = speakers[index % speakers.length];
    const speaker2 = speakers[(index + 1) % speakers.length];

    exchanges.push({
      speaker: speaker1.name,
      role: speaker1.stance,
      text: `À mon avis, ${question.toLowerCase()} — c'est une évidence.`,
      question,
    });

    exchanges.push({
      speaker: speaker2.name,
      role: speaker2.stance,
      text: `Je ne suis pas d'accord. ${question.toLowerCase()} est bien plus complexe.`,
      question,
    });
  });

  exchanges.push({
    speaker: 'Ganatan',
    role: 'Animateur',
    text: `Merci à tous pour vos contributions sur le sujet "${topic}".`,
  });

  return {
    topic,
    exchanges,
  };
}
