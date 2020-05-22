import { defineFeature, loadFeature } from 'jest-cucumber';
import LoginPage from '../src/LoginPage';
import { login } from '../src/_services';
 
const feature = loadFeature('./features/LoginPage.feature');

defineFeature(feature, test => {
  test('Login Page', ({ given, when, then }) => {
    let login;
 
    given('Creating the login-page', () => {
      login = new LoginPage();
    });
 
    when('Check if the user is logging in', () => {
      expect(login.loggingIn).toBe();
    });
 
    then('Check username', () => {
      expect(login.username).toBe('');
    });
 
    then('Check password', () => {
        expect(login.password).toBe('');
      });
 
   
  });
});

defineFeature(feature, test => {
    test('Handle different HTTP services such as the communication', ({ given, when, then }) => {
      let login;
   
      given('Login function', () => {
        this.login = login();
      });
   
      when('Check login options ', () => {
        expect(this.login.requestOptions.method).toBe('POST');
        expect(this.login.requestOptions.headers).not.toBe(' ');
        expect(this.login.requestOptions.body).not.toBeNull();

      });
   
      then('Check username', () => {
        expect(login.username).toBe('');
      });
   
      then('Check password', () => {
          expect(login.password).toBe('');
        });
   
     
    });
  });