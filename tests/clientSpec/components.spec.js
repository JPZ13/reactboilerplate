'use strict';
import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';
import App from '../../client/src/app/components/App';

describe('React Components', function () {

  it('Should have an App component', function () {
    const wrapper = shallow( <App /> );
    expect(wrapper.props().existTest).to.be.undefined;
  });

});
