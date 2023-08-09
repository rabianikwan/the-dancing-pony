import { Users } from '../../models/users.model';
import { UsersRepository } from '../users.repository.interface';
import { Repository, UpdateResult } from 'typeorm';
import { UserProfileDto } from '../../dto/user-profile.dto';
import { UserUpdateDto } from '../../dto/user-update.dto';
import { UserDto } from '../../dto/user.dto';
import { HashingService } from '../../../shared/hashing/hashing.service';
import { AccountsUsers } from '../../interfaces/accounts-users.interface';

export class UsersTypeOrmRepository implements UsersRepository {
  constructor(
    private readonly usersRepository: Repository<Users>,
    private readonly hashingService: HashingService,
  ) {}

  async findAll() {
    return await this.usersRepository.find();
  }
  async findByEmail(email: string) {
    return await this.usersRepository.findOneBy({
      email: email,
    });
  }

  public async findBySub(sub: number): Promise<Users> {
    return await this.usersRepository.findOneByOrFail({
      id: sub,
    });
  }

  public async findById(userId: string): Promise<Users> {
    return await this.usersRepository.findOneBy({
      id: +userId,
    });
  }

  public async create(userDto: UserDto): Promise<AccountsUsers> {
    return await this.usersRepository.save(userDto);
  }

  public async updateByEmail(email: string): Promise<Users> {
    const user = await this.usersRepository.findOneBy({ email: email });
    user.password = await this.hashingService.hash(
      Math.random().toString(36).slice(-8),
    );

    return await this.usersRepository.save(user);
  }

  public async updateByPassword(
    email: string,
    password: string,
  ): Promise<Users> {
    const user = await this.usersRepository.findOneBy({ email: email });
    user.password = await this.hashingService.hash(password);

    return await this.usersRepository.save(user);
  }

  public async updateProfileUser(
    id: string,
    userProfileDto: UserProfileDto,
  ): Promise<Users> {
    const { name, email, nickname} = userProfileDto;
    const user = await this.usersRepository.findOneBy({ id: +id });
    user.name = name;
    user.email = email;
    user.nickname = nickname;

    return await this.usersRepository.save(user);
  }

  public async updateUser(
    id: string,
    userUpdateDto: UserUpdateDto,
  ): Promise<UpdateResult> {
    return await this.usersRepository.update(
      {
        id: +id,
      },
      { ...userUpdateDto },
    );
  }

  public async deleteUser(user): Promise<void> {
    await this.usersRepository.remove(user);
  }
}
