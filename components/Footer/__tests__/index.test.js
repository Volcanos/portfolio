import React from 'react'
import { mount, render } from 'enzyme';
import 'jest-styled-components'
import Footer from '../index';

describe('Footer', function () {
    it('should render text', function () {
        const text = render(<Footer />).text();
        expect(text).toMatch(/Borja Gracia Martín/);
    });
    it('should render link', function () {
        const text = render(<Footer />).html();
        expect(text).toMatch(/<a/);
    });
    it('snapshot not change', function () {
        const tree = render(<Footer />);
        expect(tree).toMatchSnapshot();
    });
});