import { writable } from 'svelte/store';
import { generateSampleText } from "./sampleText";

// TODO: fix ts errors
// TODO: see about making timer setup cleaner

export const selectedLang = writable('lorem');
export const sampleText = writable(generateSampleText());
export const inputText = writable('');

export const isRunning = writable(false);
const timer = 5;
export let timerLabel = writable(`${timer}`);
// @ts-ignore
let intervalId;

const resetText = () => {
  inputText.set('');
};

const resetTimer = () => {
  isRunning.set(false);
  timerLabel.set(`${timer}`);
  // @ts-ignore
  clearInterval(intervalId);
}

export const resetTest = () => {
  resetText();
  resetTimer();
};

export function startTestTimer() {
  resetTimer();
  isRunning.set(true);
  let count = timer;

  intervalId = setInterval(() => {
    count--;
    timerLabel.set(`${count}`);
    
    if (count < 0) {
      // @ts-ignore
      clearInterval(intervalId);
      isRunning.set(false);
    }
  }, 1000);
}
