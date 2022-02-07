import { Factory, Seeder } from 'typeorm-seeding';
import FrameWork from '../factories/framework.factories';

export default class CreateFrameWork implements Seeder {
  frameworks = [
    'React.JS',
    'Vue.JS',
    'Angular.JS',
    'Express.JS',
    'Nest.JS',
    'Ruby on Rails',
    'Laravel',
    'Django',
  ];

  public async run(factory: Factory) {
    await Promise.all(
      this.frameworks.map(async (name) => {
        await factory(FrameWork)(name).create();
      }),
    );
  }
}
