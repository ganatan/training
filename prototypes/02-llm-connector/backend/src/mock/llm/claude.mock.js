export function reply(data) {
  const name = (data.name || 'Inconnu').replace('-', ' ')
  const length = data.length || 'medium'
  const style = data.style || 'neutral'
  
  const descriptions = {
    neutral: {
      short: `${name} est un réalisateur britannique visionnaire connu pour Alien, Blade Runner et Gladiator.`,
      medium: `${name} est un réalisateur britannique visionnaire, créateur d'univers cinématographiques mémorables comme Alien, Blade Runner et Gladiator. Son style unique allie esthétique visuelle soignée et narration puissante.`,
      long: `${name} est un réalisateur britannique visionnaire, créateur d'univers cinématographiques mémorables comme Alien, Blade Runner et Gladiator. Son style unique allie esthétique visuelle soignée et narration puissante. Formé en arts graphiques, il apporte une précision technique et un sens esthétique remarquable à chacun de ses films.`
    },
    casual: {
      short: `${name} ? Ce réalisateur génial qui nous a donné Alien et Blade Runner !`,
      medium: `${name} ? Ah, ce réalisateur britannique génial qui nous a donné Alien et Blade Runner ! Ses films sont toujours visuellement époustouflants et racontent des histoires qui restent gravées dans la mémoire.`,
      long: `${name} ? Ah, ce réalisateur britannique génial qui nous a donné Alien et Blade Runner ! Ses films sont toujours visuellement époustouflants et racontent des histoires qui restent gravées dans la mémoire. Il a commencé dans la pub avant de devenir une légende du cinéma avec son style hyper reconnaissable.`
    },
    technical: {
      short: `Sir ${name}, cinéaste britannique né en 1937, maître de la direction artistique et de l'éclairage.`,
      medium: `Sir ${name}, cinéaste britannique né en 1937, est reconnu pour sa maîtrise technique exceptionnelle et son approche visuelle distinctive. Son utilisation innovante de l'éclairage et sa direction artistique méticuleuse définissent son style cinématographique.`,
      long: `Sir ${name}, cinéaste britannique né en 1937, est reconnu pour sa maîtrise technique exceptionnelle et son approche visuelle distinctive. Son utilisation innovante de l'éclairage et sa direction artistique méticuleuse définissent son style cinématographique. Utilisant souvent des storyboards détaillés qu'il dessine lui-même, il supervise minutieusement chaque aspect visuel de ses productions.`
    },
    narrative: {
      short: `Le jeune ${name} commença sa carrière dans la publicité avant de révolutionner le cinéma avec ses visions uniques.`,
      medium: `Le jeune ${name} ne se doutait pas, en commençant sa carrière dans la publicité, qu'il deviendrait l'un des réalisateurs les plus influents de sa génération, créant des mondes visuels qui redéfiniraient le cinéma de science-fiction et historique.`,
      long: `Le jeune ${name} ne se doutait pas, en commençant sa carrière dans la publicité, qu'il deviendrait l'un des réalisateurs les plus influents de sa génération, créant des mondes visuels qui redéfiniraient le cinéma de science-fiction et historique. De l'espace claustrophobique d'Alien aux arènes de Gladiator, ses œuvres ont transcendé leurs genres pour devenir des références culturelles incontournables.`
    },
    press: {
      short: `Le cinéaste britannique ${name} continue d'impressionner avec sa vision artistique unique et son perfectionnisme.`,
      medium: `Le légendaire cinéaste britannique ${name}, dont la filmographie comprend des chefs-d'œuvre comme Alien et Gladiator, continue d'impressionner critiques et public avec sa vision artistique unique et son perfectionnisme légendaire.`,
      long: `Le légendaire cinéaste britannique ${name}, dont la filmographie comprend des chefs-d'œuvre comme Alien et Gladiator, continue d'impressionner critiques et public avec sa vision artistique unique et son perfectionnisme légendaire. À une époque où le cinéma évolue rapidement, Scott reste fidèle à son approche méticuleuse tout en embrassant les nouvelles technologies pour servir ses récits ambitieux.`
    }
  }

  const texte = descriptions[style]?.[length] || descriptions.neutral[length] || descriptions.neutral.medium
  
  return texte
}
