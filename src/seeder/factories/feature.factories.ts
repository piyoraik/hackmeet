import { Feature } from '../../entity/features.entity';
import { define } from 'typeorm-seeding';

define(Feature, (_, name: string): Feature => {
  const feature = new Feature();
  feature.name = name;

  return feature;
});

export default Feature;
