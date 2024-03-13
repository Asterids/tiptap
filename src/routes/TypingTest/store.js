import { writable } from 'svelte/store';
import { generateSampleText } from "./sampleText";

export const selectedLang = writable('lorem');
export const sampleText = writable(generateSampleText());
export const inputText = writable('');
