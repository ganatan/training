export function reply(data) {
  return {
    model: 'chatgpt',
    input: data,
    output: 'Voici une réponse simulée de ChatGPT.'
  }
}
// export function reply({ prompt }) {
//   return {
//     model: 'chatgpt',
//     input: prompt,
//     output: `Réponse mockée de ChatGPT : "${prompt}"`
//   }
// }
