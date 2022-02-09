import { CreateUserDTO } from 'src/user/dto/create.user.dto';
import { Factory, Seeder } from 'typeorm-seeding';
import User from '../factories/user.factories';

export default class CreateUser implements Seeder {
  users: CreateUserDTO[] = [
    {
      nickname: 'らいちゅー',
      userId: 'twitter|1097467888758214656',
      picture:
        'https://pbs.twimg.com/profile_images/1421858170855518209/BttM3etT_normal.jpg',
    },
  ];

  public async run(factory: Factory) {
    await Promise.all(
      this.users.map(async (user) => {
        await factory(User)(user).create();
      }),
    );
  }
}
