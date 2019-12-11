/* import React from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import Footer from '../index';
*/

import React from 'react';
const greetme = "Hello!";

describe("Our first test!", () => {
  it("Should say hello!", () => {
    expect(greetme).toBe("Hello!");
  });
});
