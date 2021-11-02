import { SignInInterface } from '../interfaces/request/sign-in.interface';

export class SignIn implements SignInInterface {
  private _username: string;
  private _password: string;

  constructor({ username = null, password = null }) {
    this.username = username;
    this.password = password;
  }

  public get username(): string {
    return this._username;
  }

  public set username(value: string) {
    this._username = value;
  }

  public get password(): string {
    return this._password;
  }

  public set password(value: string) {
    this._password = value;
  }
}
