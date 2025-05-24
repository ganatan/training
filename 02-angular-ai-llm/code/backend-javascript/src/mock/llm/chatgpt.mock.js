export function reply(data) {

  const name = (data.name || 'Inconnu').replace('-', ' ')
  const style = data.style || 'neutral'
  const length = data.length || 'medium'

  const descriptions = {
    neutral: {
      short: `${name} est un réalisateur britannique reconnu pour ses films marquants.`,
      medium: `${name} est un réalisateur britannique reconnu pour des films comme Alien, Blade Runner, Gladiator ou Seul sur Mars. Son style mêle innovation visuelle et narration puissante.`,
      long: `${name} est un réalisateur britannique reconnu pour des films comme Alien, Blade Runner, Gladiator ou Seul sur Mars. Son style mêle innovation visuelle et narration puissante. Il a profondément influencé le cinéma de science-fiction et historique par sa capacité à allier spectacle et profondeur.`
    },
    casual: {
      short: `${name} ? Le gars qui a fait Alien et Gladiator.`,
      medium: `${name} ? C’est le gars qui a fait Alien, Gladiator, plein de films cultes. Du grand spectacle, toujours marquant.`,
      long: `${name} ? C’est le gars qui a fait Alien, Gladiator, plein de films cultes. Du grand spectacle, toujours marquant. Chaque film qu’il sort reste gravé dans les esprits avec des images fortes et des histoires puissantes.`
    },
    technical: {
      short: `Sir ${name}, né en 1937, est un cinéaste britannique reconnu.`,
      medium: `Sir ${name}, né en 1937, est un cinéaste britannique. Il est connu pour ses œuvres de science-fiction et épiques, avec une attention marquée à la composition et à la direction artistique.`,
      long: `Sir ${name}, né en 1937, est un cinéaste britannique. Il est connu pour ses œuvres de science-fiction et épiques, avec une attention marquée à la composition et à la direction artistique. Son approche rigoureuse et visuellement ambitieuse influence encore aujourd’hui de nombreux réalisateurs.`
    },
    narrative: {
      short: `Il était une fois un jeune homme nommé ${name}.`,
      medium: `Il était une fois un jeune homme nommé ${name}, qui allait transformer le cinéma avec des mondes visuels forts et des récits intenses.`,
      long: `Il était une fois un jeune homme nommé ${name}, qui allait transformer le cinéma avec des mondes visuels forts et des récits intenses. De son premier tournage à ses plus grandes fresques épiques, il a marqué chaque époque d’une empreinte inimitable.`
    },
    press: {
      short: `${name}, cinéaste britannique, marque encore les esprits.`,
      medium: `Le cinéaste britannique ${name}, auteur de Gladiator et Blade Runner, continue de marquer le cinéma moderne par sa rigueur et sa vision artistique.`,
      long: `Le cinéaste britannique ${name}, auteur de Gladiator et Blade Runner, continue de marquer le cinéma moderne par sa rigueur et sa vision artistique. Salué par la critique et reconnu pour son perfectionnisme, il incarne une certaine idée de l’excellence cinématographique.`
    }
  }

  return (descriptions[style] && descriptions[style][length])
    || (descriptions.neutral && descriptions.neutral.medium)
    || ''
}
