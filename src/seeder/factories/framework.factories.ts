import { FrameWork } from '../../entity/frameworks.entity';
import { define } from 'typeorm-seeding';
import { CreateFrameWorksDTO } from 'src/frameworks/dto/create.frameworks.dto';

define(FrameWork, (_, createFrameWorksDTO: CreateFrameWorksDTO): FrameWork => {
  const framework = new FrameWork();
  framework.name = createFrameWorksDTO.name;
  framework.icon = createFrameWorksDTO.icon;
  framework.color = createFrameWorksDTO.color;

  return framework;
});

export default FrameWork;
