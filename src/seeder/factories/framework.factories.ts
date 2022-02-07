import { FrameWork } from '../..//entity/frameworks.entity';
import { define } from 'typeorm-seeding';

define(FrameWork, (_, name: string): FrameWork => {
  const language = new FrameWork();
  language.name = name;

  return language;
});

export default FrameWork;
