import { faker } from '@faker-js/faker';
import { fakerFR } from '@faker-js/faker';

export const generateSampleTextEnglish = () => {
  return faker.word.words(100);
}

export const generateSampleTextFrench = () => {
  return fakerFR.word.words(100);
}

export const generateSampleTextLorem = () => {
  return faker.lorem.paragraphs(10, ' ')
}
