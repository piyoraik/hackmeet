import { Feature } from '../../entity/features.entity';
import { define } from 'typeorm-seeding';
import { CreateFeaturesDTO } from 'src/features/dto/create.features.dto';

define(Feature, (_, createFeatureDTO: CreateFeaturesDTO): Feature => {
  const feature = new Feature();
  feature.name = createFeatureDTO.name;
  feature.icon = createFeatureDTO.icon;
  feature.color = createFeatureDTO.color;

  return feature;
});

export default Feature;
