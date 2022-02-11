// export class InputJoinDTO {
//   user:
// }

import { Recruit } from 'src/entity/recruits.entity';
import { User } from 'src/entity/user.entity';

export class CreateJoinDTO {
  user: User;
  recruit: Recruit;
}
