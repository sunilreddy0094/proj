
import {User} from "./user.model";
export class LoginService{
  index:number;
  users: User[] = [
    new User('test@test1.com','abcd'),
    new User('test@test2.com','xyz')
  ]

  getUser(username:string){
    this.index = this.users.findIndex(x => x.username==username);
    return this.users[this.index];

  }
}
