import React from 'react';
import { render } from 'react-testing-library';

import ElementVideogame from '../index';

const renderComponent = (props = {}) =>
  render(
    <ElementVideogame></ElementVideogame>,
  );

describe('<ElementVideogame />', () => {
    it('should render an <li> tag', () => {
      const { container } = renderComponent();
      expect(container.querySelector('li')).not.toBeNull();
    });
    it('should render an <a> tag', () => {
        const { container } = renderComponent();
        expect(container.querySelector('a')).not.toBeNull();
    });
    it('should render an <ALink> tag', () => {
        const { container } = renderComponent();
        expect(container.querySelector('ALink')).not.toBeNull();
    });
    it('should render an <HeaderLink> tag', () => {
        const { container } = renderComponent();
        expect(container.querySelector('HeaderLink')).not.toBeNull();
    });

});