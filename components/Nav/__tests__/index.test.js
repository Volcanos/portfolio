import React from 'react'
import { render } from 'enzyme';
import 'jest-styled-components'
import Nav from '../index';

describe('Nav', function () {
    it('should render all buttons', function () {
        const text = render(<Nav />).html();
        expect(text).toMatch(/Home/);
        expect(text).toMatch(/Portfolio/);
        expect(text).toMatch(/Experiencia laboral/);
        expect(text).toMatch(/Contacto/);
    });
    it('render snapshot not change', function () {
        const tree = render(<Nav />);
        expect(tree).toMatchSnapshot();
    });
});