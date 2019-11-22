import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class UserService {

  private users:User[] = [
    {
      id: 1,
      name: "Enrique",
      age: 36,
      phone: 9842339936
    },
    {
      id: 2,
      name: "Sri",
      age: 28,
      phone: 9842339936
    },
    {
      id: 3,
      name: "David",
      age: 18,
      phone: 9842339936
    },
    {
      id: 4,
      name: "Anne",
      age: 41,
      phone: 9842339936
    }
  ];
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.users;
  }

  addUser(user) {
    if (user) {
      this.users.push(user);
      return this.users;
    }
  }

  
}

export interface User {
  id?: number;
  name: string;
  age: number;
  phone: number;
}
