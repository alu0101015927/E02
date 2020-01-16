import React from 'react';
import { render } from 'react-testing-library';

import NavBar from '../index';

const renderComponent = () =>
  render(
    <NavBar></NavBar>,
  );

describe('<NavBar />', () => {
    it('should render an <div> tag', () => {
      const { container } = renderComponent();
      expect(container.querySelector('div')).not.toBeNull();
    });
    it('should render an <HeaderLink> tag', () => {
        const { container } = renderComponent();
        expect(container.querySelector('HeaderLink')).not.toBeNull();
    });
    it('should render an <FormattedMessage> tag', () => {
        const { container } = renderComponent();
        expect(container.querySelector('FormattedMessage')).not.toBeNull();
    });

});