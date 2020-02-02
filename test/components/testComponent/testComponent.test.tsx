import * as React from 'react';
import { describe, it } from 'mocha';
import { mount } from 'enzyme';
import { expect } from 'chai';

import TestComponent from '../../../client/src/components/testComponent/testComponent';

describe('TestComponent', () => {
  describe('TestComponent component tests', () => {
    const wrapper = mount(<TestComponent />);

    it('should render an img', () => {
      const node = wrapper.find('img');
      expect(node.length).to.equal(1);
    });
  });
});
