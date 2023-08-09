import { UserProfileDto } from '../dto/user-profile.dto';
import { UserUpdateDto } from '../dto/user-update.dto';
import { UserDto } from '../dto/user.dto';

export interface UsersRepository {
  create(userDto: UserDto);

  deleteUser(id: string);

  findAll();

  findByEmail(email: string);

  findById(userId: string);

  findBySub(sub: number);

  updateByEmail(email: string);

  updateByPassword(email: string, password: string);

  updateProfileUser(id: string, userProfileDto: UserProfileDto);

  updateUser(id: string, userUpdateDto: UserUpdateDto);
}

export const USERS_REPOSITORY_TOKEN = 'users-repository-token';
