import { reject } from 'q';

export class AuthService {
  loggin = false;


  isAuthenticated() {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.loggin);
      }, 800);
    });
    return promise;
  }

  login() {
    this.loggin = true;
  }

  logout() {
    this.loggin = false;
  }
}
