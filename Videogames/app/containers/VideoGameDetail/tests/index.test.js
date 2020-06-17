import('react-native');
import React from 'react';
import renderer from 'react-test-renderer';

import VideoGameDetails from '../index';

it('renders correctly', () => {
    const tree = renderer.create(
      <VideoGameDetails />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });