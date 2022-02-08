import { Language } from '../..//entity/languages.entity';
import { define } from 'typeorm-seeding';
import { CreateLanguagesDTO } from 'src/languages/dto/create.languages.dto';

define(Language, (_, createLanguageDTO: CreateLanguagesDTO): Language => {
  const language = new Language();
  language.name = createLanguageDTO.name;
  language.icon = createLanguageDTO.icon;
  language.color = createLanguageDTO.color;

  return language;
});

export default Language;
