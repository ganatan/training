function generateSpeakerMock(topic, count = 4) {
  if (!topic) throw new Error('Sujet manquant');
  if (count % 2 !== 0) throw new Error('Le nombre d’intervenants doit être pair');

  const pour = [
    { name: 'Camille', personality: 'Calme et analytique' },
    { name: 'Julien', personality: 'Structuré et convaincant' },
    { name: 'Nina', personality: 'Empathique et méthodique' },
    { name: 'Olivier', personality: 'Précis et technique' },
  ];

  const contre = [
    { name: 'Alexis', personality: 'Critique et passionné' },
    { name: 'Lina', personality: 'Directe et sceptique' },
    { name: 'Victor', personality: 'Provocateur et incisif' },
    { name: 'Sophie', personality: 'Énergique et ironique' },
  ];

  const moitié = count / 2;

  const speakers = [
    ...pour.slice(0, moitié).map((s) => ({
      name: s.name,
      role: 'Intervenant',
      stance: 'Pour',
      personality: s.personality,
    })),
    ...contre.slice(0, moitié).map((s) => ({
      name: s.name,
      role: 'Intervenant',
      stance: 'Contre',
      personality: s.personality,
    })),
  ];

  return {
    moderator: {
      name: 'Ganatan',
      role: 'Animateur',
      stance: 'Neutre',
      personality: 'Neutre, pose les questions et relance le débat',
    },
    speakers,
  };
}

export default generateSpeakerMock;

