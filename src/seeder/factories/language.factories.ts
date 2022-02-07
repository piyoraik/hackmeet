import { Language } from '../..//entity/languages.entity';
import { define } from 'typeorm-seeding';

define(Language, (_, name: string): Language => {
  const language = new Language();
  language.name = name;

  return language;
});

export default Language;
