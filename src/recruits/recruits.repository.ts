import { NotFoundException } from '@nestjs/common';
import { Recruit } from 'src/entity/recruits.entity';
import { EntityRepository, Repository, SelectQueryBuilder } from 'typeorm';
import { CreateRecruitType } from './dto/create.recruits.dto';
import { SearchRecruitsDTO } from './dto/search.recruit.dto';

@EntityRepository(Recruit)
export class RecruitsRepository extends Repository<Recruit> {
  // Createの操作
  async createRecruit(createRecruit: CreateRecruitType) {
    const recruit = this.create({
      ...createRecruit,
    });
    await this.save(recruit);
    return recruit;
  }

  // findOne
  async findOneRecruit(attrs: Partial<Recruit>) {
    const recruit = await this.findOne({
      where: attrs,
      relations: [
        'languages',
        'frameworks',
        'features',
        'user',
        'joins',
        'joins.user',
      ],
    });
    if (!recruit) {
      throw new NotFoundException('Recruit Not Found');
    }
    return recruit;
  }

  // findWhere
  async findWhereLikeRecruit(attrs: SearchRecruitsDTO) {
    const { languages, frameworks, features, ...recruit } = attrs;
    const recruitQuery = (qb: SelectQueryBuilder<Recruit>) => {
      const queryBuilder = qb.where('recruit.title like :title', {
        title: `%${recruit.title}%`,
      });

      if (languages.length) {
        queryBuilder.andWhere('language.name IN (:...languageNames)', {
          languageNames: languages,
        });
      }
      if (frameworks.length) {
        queryBuilder.andWhere('framework.name IN (:...frameworkNames)', {
          frameworkNames: frameworks,
        });
      }
      if (features.length) {
        queryBuilder.andWhere('feature.name IN (:...featureNames)', {
          featureNames: features,
        });
      }

      return queryBuilder;
    };

    const recruits = await this.find({
      join: {
        alias: 'recruit',
        innerJoinAndSelect: {
          language: 'recruit.languages',
          framework: 'recruit.frameworks',
          feature: 'recruit.features',
        },
      },
      relations: ['joins', 'user'],
      where: (qb: SelectQueryBuilder<Recruit>) => {
        recruitQuery(qb);
      },
    });
    if (!recruits) {
      throw new NotFoundException('Recruit Not Found');
    }
    return recruits;
  }

  // update
  async updateRecruit(id: string, attrs: Partial<Recruit>) {
    const recruit = await this.findOneRecruit({ id });
    Object.assign(recruit, attrs);
    await this.save(recruit);
    return recruit;
  }

  // softDelete
  async softDeleteRecruit(id: string) {
    const recruit = await this.findOneRecruit({ id });
    await this.softRemove(recruit);
    return recruit;
  }
}
