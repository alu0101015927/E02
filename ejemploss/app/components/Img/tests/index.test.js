import React from 'react';
import { render } from 'react-testing-library';

import Img from '../index';

const src = 'testing.png';
const alt = 'testing';
const renderComponent = (props = {}) =>
  render(<Img src={src} alt={alt} {...props} />);

describe('<Img />', () => {
  it('should render an <img> tag', () => {
    const { container } = renderComponent();
    const element = container.querySelector('img');
    expect(element).not.toBeNull();
  });

  it('should have an src attribute', () => {
    const { container } = renderComponent();
    const element = container.querySelector('img');
    expect(element.hasAttribute('src')).toBe(true);
  });

  it('should have an alt attribute', () => {
    const { container } = renderComponent();
    const element = container.querySelector('img');
    expect(element.hasAttribute('alt')).toBe(true);
  });
});
