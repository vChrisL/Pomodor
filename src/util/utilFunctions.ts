export function CreateAudioElement(src: string, volume: number): HTMLAudioElement {
  const audio = new Audio(src);
  audio.volume = volume;
  return audio;
}