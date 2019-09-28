import React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from './HelloWorld.view';

describe('Hello World - View', () => {
  const component = shallow(<HelloWorld />);
  it('should render wrapper element', () => {
    expect(component.find('.wrapper')).toHaveLength(1);
  });
});
