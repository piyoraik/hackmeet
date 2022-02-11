import { Injectable } from '@nestjs/common';
import { Recruit } from 'src/entity/recruits.entity';
import { FeaturesService } from 'src/features/features.service';
import { FrameworksService } from 'src/frameworks/frameworks.service';
import { LanguagesService } from 'src/languages/languages.service';
import { UserService } from 'src/user/user.service';
import {
  CreateRecruitsDTO,
  CreateRecruitType,
} from './dto/create.recruits.dto';
import { RecruitsRepository } from './recruits.repository';

@Injectable()
export class RecruitsService {
  constructor(
    private readonly recruitsRepository: RecruitsRepository,
    private readonly languageService: LanguagesService,
    private readonly frameworkService: FrameworksService,
    private readonly featureService: FeaturesService,
    private readonly userService: UserService,
  ) {}

  // create
  async create(createRecruitDTO: CreateRecruitsDTO, userId: string) {
    const { languages, frameworks, features, ...recruit } = createRecruitDTO;

    const user = await this.userService.findOne({ userId });

    const resLangues = await Promise.all(
      languages.map(async (language) => {
        const res = this.languageService.findOneID(language);
        return res;
      }),
    );
    const resFrameworks = await Promise.all(
      frameworks.map(async (framework) => {
        const res = this.frameworkService.findOneID(framework);
        return res;
      }),
    );
    const resFeatures = await Promise.all(
      features.map((feature) => {
        const res = this.featureService.findOneID(feature);
        return res;
      }),
    );

    const createRecruit: CreateRecruitType = {
      ...recruit,
      languages: resLangues,
      frameworks: resFrameworks,
      features: resFeatures,
      user,
    };
    return await this.recruitsRepository.createRecruit(createRecruit);
  }

  // findAll
  async findAll() {
    return await this.recruitsRepository.find({
      relations: ['languages', 'frameworks', 'features', 'user', 'joins'],
    });
  }

  // findOneID
  async findOneID(id: string) {
    return await this.recruitsRepository.findOneRecruit({ id });
  }

  // findOne
  async findOne(attrs: Partial<Recruit>) {
    return await this.recruitsRepository.findOneRecruit(attrs);
  }

  // findWhere
  async findWhere(attrs: Partial<Recruit>) {
    return await this.recruitsRepository.findWhereLikeRecruit(attrs);
  }

  // update
  async update(id: string, attrs: Partial<Recruit>) {
    return await this.recruitsRepository.updateRecruit(id, attrs);
  }

  // softDelete
  async softDelete(id: string) {
    return await this.recruitsRepository.softDeleteRecruit(id);
  }
}
