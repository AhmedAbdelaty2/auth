import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let authService: AuthService;
  let usersService: Partial<UsersService>;
  let jwtService: Partial<JwtService>;

  beforeEach(() => {
    usersService = {
      findByEmail: jest.fn().mockResolvedValue({
        _id: '123',
        email: 'test@example.com',
        password: '$2b$10$hashedpassword123',
      }),
    };

    jwtService = {
      sign: jest.fn().mockReturnValue('fake-jwt-token'),
    };

    authService = new AuthService(
      usersService as UsersService,
      jwtService as JwtService,
    );
  });

  it('should sign in and return a token', async () => {
    const bcrypt = require('bcrypt');
    jest.spyOn(bcrypt, 'compare').mockResolvedValue(true);

    const result = await authService.signIn('test@example.com', 'password123');
    expect(result).toEqual({ access_token: 'fake-jwt-token' });
  });
});
