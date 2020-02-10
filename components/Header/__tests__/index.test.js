import React from 'react'
import { mount, render } from 'enzyme';
import 'jest-styled-components'
import Header from '../index';

describe('Header', function () {
    it('snapshot not change', function () {
        const tree = render(<Header />);
        expect(tree).toMatchSnapshot();
    });
});