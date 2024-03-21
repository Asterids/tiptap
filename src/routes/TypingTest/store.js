import { derived, get, writable } from 'svelte/store';
import { generateSampleText } from "./sampleText";

export const selectedLang = writable('lorem');

export const sampleText = writable(generateSampleText());
export const sampleTextWordsArray = derived(sampleText, ($sampleText) => $sampleText.split(' '));
export const wordMatchStatusAtIndex = writable([]);

export const inputText = writable('');
const inputTextWordsArray = derived(inputText, ($inputText) => $inputText.split(' '));
// const inputTextCursorPosition = derived(inputText, ($inputText) => $inputText.length - 1);

export const isTestInProgress = writable(false);
const timer = 30;
export let timerLabel = writable(`${timer}`);
// @ts-ignore
let intervalId;

const resetText = () => {
  inputText.set('');
  sampleText.set(generateSampleText(get(selectedLang)));
};

const resetTimer = () => {
  isTestInProgress.set(false);
  timerLabel.set(`${timer}`);
  // @ts-ignore
  clearInterval(intervalId);
}

export const resetTest = () => {
  resetText();
  resetTimer();
};

function beginTest() {
  resetTimer();
  isTestInProgress.set(true);
  let count = timer;

  intervalId = setInterval(() => {
    count--;
    timerLabel.set(`${count}`);
    
    if (count < 1) {
      finishTest();
      timerLabel.set('0');
    }
  }, 1000);
}

function finishTest() {
  // @ts-ignore
  clearInterval(intervalId);
  isTestInProgress.set(false);
}

inputTextWordsArray.subscribe((value) => {
  if (!get(isTestInProgress) && value[0].length) {
    beginTest();
  }

  // @ts-ignore
  let tempArray = [];
  value.forEach((word, idx) => {
    tempArray.push(word === get(sampleTextWordsArray)[idx])
  });

  // @ts-ignore
  wordMatchStatusAtIndex.set(tempArray);
});
