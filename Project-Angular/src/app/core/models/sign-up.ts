import { SignUpInterface } from '../interfaces/request/sign-up.interface';
import { ComponentEventHandler } from '../utils/event/component-event-handler';
import { TesteAction } from '../utils/event/testeAction';

export class SignUp implements SignUpInterface  {
  private _username: string;
  private _password: string;
  private _role: string;

  constructor({ username = null, password = null, role = null }) {
    this.username = username;
    this.password = password;
    this.role = role;
  }

  public get username(): string {
    return this._username;
  }

  public set username(value: string) {
    this._username = value
  }

  public get password(): string {
    return this._password;
  }

  public set password(value: string) {
    this._password = value;
  }

  public get role(): string {
    return this._role;
  }

  public set role(value: string) {
    this._role = value;
  }
}
