import { Factory, Seeder } from 'typeorm-seeding';
import Language from '../factories/language.factories';

export default class CreateLanguage implements Seeder {
  languages = [
    'Python',
    'JavaScript',
    'TypeScript',
    'Java',
    'C#',
    'C',
    'C++',
    'Go',
    'R',
    'Swift',
    'PHP',
    'Ruby',
  ];

  public async run(factory: Factory) {
    await Promise.all(
      this.languages.map(async (name) => {
        await factory(Language)(name).create();
      }),
    );
  }
}
