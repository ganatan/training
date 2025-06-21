function speakersMock(topic, count = 4) {
  if (!topic) throw new Error('Missing topic');
  if (count % 2 !== 0) throw new Error('Speaker count must be even');

  const pro = [
    { name: 'Camille', personality: 'Calm and analytical' },
    { name: 'Julien', personality: 'Structured and persuasive' },
    { name: 'Nina', personality: 'Empathic and methodical' },
    { name: 'Olivier', personality: 'Precise and technical' },
  ];

  const con = [
    { name: 'Alexis', personality: 'Critical and passionate' },
    { name: 'Lina', personality: 'Direct and skeptical' },
    { name: 'Victor', personality: 'Provocative and sharp' },
    { name: 'Sophie', personality: 'Energetic and ironic' },
  ];

  const half = count / 2;

  const speakers = [
    ...pro.slice(0, half).map((s) => ({
      name: s.name,
      role: 'Speaker',
      stance: 'Pro',
      personality: s.personality,
    })),
    ...con.slice(0, half).map((s) => ({
      name: s.name,
      role: 'Speaker',
      stance: 'Con',
      personality: s.personality,
    })),
  ];

  return {
    moderator: {
      name: 'Ganatan',
      role: 'Moderator',
      stance: 'Neutral',
      personality: 'Neutral, asks questions and drives the debate',
    },
    speakers,
  };
}

export { speakersMock };
