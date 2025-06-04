export function reply(type, data) {
  const name = (data.name || 'Inconnu').replace('-', ' ');
  const style = data.style || 'neutral';
  const length = data.length || 'medium';
  const llm = data.llm || 'chatgpt';
  const validType = ['biography', 'filmography', 'summary'].includes(type) ? type : 'contenu';

  return `Demande envoyée à ${llm} pour une ${validType} de "${name}", avec un style "${style}" et une longueur "${length}".`;
}
