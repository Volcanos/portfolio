import React from 'react'
import { mount, render } from 'enzyme';
import 'jest-styled-components'
import Logo from '../index';

describe('Logo', function () {
    it('should render to static and contain Borja Gracia', function () {
        const text = render(<Logo />).text();
        expect(text).toEqual('Borja Gracia');
    });

    it('snapshot not change', function () {
        const tree = mount(<Logo />);
        expect(tree).toMatchSnapshot();
    });
});