export class LogginService {
  logStatusChange(status: string) {
    console.log('A server status has changed, new status: ' + status);
  }
}
