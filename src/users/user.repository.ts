import {
    ConflictException,
    Injectable,
    InternalServerErrorException,
  } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Repository } from 'typeorm';
  import { AuthCredentialsDto } from '../auth/dto/auth-credentials.dto';
  import { User } from './user.entity';
  import * as bcrypt from 'bcrypt';
  
  @Injectable()
  export class UsersRepository {
    constructor(
      @InjectRepository(User)
      private readonly userEntityRepository: Repository<User>,
    ) {}
  
    async findUserByUsername(nickname: string): Promise<User> {
      return await this.userEntityRepository.findOneBy({
        nickname,
      });
    }
    async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
      const { nickname, password } = authCredentialsDto;
  
      // hash
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = this.userEntityRepository.create({
        nickname,
        password: hashedPassword,
      });
      try {
        await this.userEntityRepository.save(user);
      } catch (error) {
        if (error.code == 23505) {
          throw new ConflictException('Nickname already exists');
        } else {
          throw new InternalServerErrorException();
        }
      }
    }
  }