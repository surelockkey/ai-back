import { JwtPayload } from '@tech-slk/nest-auth';
import { UserRole } from 'src/modules/user/enum/user-role.enum';

export interface CurrentUserDto extends JwtPayload {
  email: string;
  role: UserRole;
}
