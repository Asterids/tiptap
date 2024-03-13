import { writable } from 'svelte/store';
import { generateSampleTextLorem } from "./sampleText";

export const sampleText = writable(generateSampleTextLorem());
export const inputText = writable('');
