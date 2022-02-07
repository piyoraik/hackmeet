import { Query, Resolver } from '@nestjs/graphql';
import { LanguagesService } from './languages.service';
import { Language } from '../entity/languages.entity';

@Resolver()
export class LanguagesResolver {
  constructor(private readonly languageService: LanguagesService) {}

  @Query(() => [Language], { name: 'languages' })
  findAll() {
    return this.languageService.findAll();
  }
}
