import { NotFoundException } from '@nestjs/common';
import { Language } from 'src/entity/languages.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateLanguagesDTO } from './dto/create.languages.dto';

@EntityRepository(Language)
export class LanguagesRepository extends Repository<Language> {
  // Createの操作
  async createLanguage(createLanguageDTO: CreateLanguagesDTO) {
    const language = this.create({
      ...createLanguageDTO,
    });
    await this.save(language);
    return language;
  }

  // findOne
  async findOneLanguage(attrs: Partial<Language>) {
    const language = await this.findOne(attrs);
    if (!language) {
      throw new NotFoundException('Language Not Found');
    }
    return language;
  }

  // findWhere
  async findWhereLikeLanguage(attrs: Partial<Language>) {
    const parseAttrs: Partial<Language> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const languages = await this.find({
      where: parseAttrs,
    });
    if (!languages) {
      throw new NotFoundException('Language Not Found');
    }
    return languages;
  }

  // update
  async updateLanguage(id: string, attrs: Partial<Language>) {
    const language = await this.findOneLanguage({ id });
    Object.assign(language, attrs);
    await this.save(language);
    return language;
  }

  // softDelete
  async softDeleteLanguage(id: string) {
    const language = await this.findOneLanguage({ id });
    await this.softRemove(language);
    return language;
  }
}
