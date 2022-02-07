import { Factory, Seeder } from 'typeorm-seeding';
import Feature from '../factories/feature.factories';

export default class CreateFeature implements Seeder {
  features = ['初心者歓迎', 'わいわい', 'もくもく', '朗読会', 'チュートリアル'];

  public async run(factory: Factory) {
    await Promise.all(
      this.features.map(async (name) => {
        await factory(Feature)(name).create();
      }),
    );
  }
}
