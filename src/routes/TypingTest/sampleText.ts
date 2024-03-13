import { faker } from '@faker-js/faker';
import { fakerFR } from '@faker-js/faker';

export const generateSampleText = (lang?: string) => {
  switch (lang) {
    case 'english':
      return faker.word.words(100);
    case 'french':
      return fakerFR.word.words(100);
    default:
      return faker.lorem.paragraphs(10, ' ');
  }
}
