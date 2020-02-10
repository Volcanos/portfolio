import React from 'react'
import { mount, render } from 'enzyme';
import 'jest-styled-components'
import Anchor from '../index';

describe('Anchor', function () {
    it('should render to static and contain Enlace', function () {
        const text = render(<Anchor url="/">Enlace</Anchor>).text();
        expect(text).toEqual('Enlace');
    });

    it('Basic render snapshot not change', function () {
        const tree = render(<Anchor url="/">Enlace</Anchor>);
        expect(tree).toMatchSnapshot();
    });
    it('Complete render snapshot not change', function () {
        const tree = render(<Anchor url="/pid" as="/post-con-titulo" style={{color: '#fff'}} fontSize="16px">Enlace</Anchor>);
        expect(tree).toMatchSnapshot();
    });
});