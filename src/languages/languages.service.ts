import { Injectable } from '@nestjs/common';
import { Language } from 'src/entity/languages.entity';
import { CreateLanguagesDTO } from './dto/create.languages.dto';
import { LanguagesRepository } from './languages.repository';

@Injectable()
export class LanguagesService {
  constructor(private readonly languageRepository: LanguagesRepository) {}

  // create
  async create(createLanguageDTO: CreateLanguagesDTO) {
    return await this.languageRepository.createLanguage(createLanguageDTO);
  }

  // findAll
  async findAll() {
    return await this.languageRepository.find();
  }

  // findOneID
  async findOneID(id: string) {
    return await this.languageRepository.findOneLanguage({ id });
  }

  // findOne
  async findOne(attrs: Partial<Language>) {
    return await this.languageRepository.findOneLanguage(attrs);
  }

  // findWhere
  async findWhere(attrs: Partial<Language>) {
    return await this.languageRepository.findWhereLikeLanguage(attrs);
  }

  // update
  async update(id: string, attrs: Partial<Language>) {
    return await this.languageRepository.updateLanguage(id, attrs);
  }

  // softDelete
  async softDelete(id: string) {
    return await this.languageRepository.softDeleteLanguage(id);
  }
}
