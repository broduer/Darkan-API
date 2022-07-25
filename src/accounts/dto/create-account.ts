import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateAccountDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    @MaxLength(12, {
      message: 'Username is too long.',
    })    
    username: string;
}