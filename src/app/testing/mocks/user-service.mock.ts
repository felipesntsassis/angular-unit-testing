export class UserServiceMock {
  getUsers() {
    return [
      { name: 'Testing User', email: 'testing.user@gmail.com', text: 'The simple user test' }
    ];
  }
}
