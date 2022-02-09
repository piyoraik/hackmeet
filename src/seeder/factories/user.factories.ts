import { define } from 'typeorm-seeding';
import { User } from 'src/entity/user.entity';
import { CreateUserDTO } from 'src/user/dto/create.user.dto';

define(User, (_, createUserDTO: CreateUserDTO): User => {
  const user = new User();
  user.nickname = createUserDTO.nickname;
  user.userId = createUserDTO.userId;
  user.picture = createUserDTO.picture;

  return user;
});

export default User;
