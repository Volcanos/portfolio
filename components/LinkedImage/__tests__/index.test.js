import React from 'react'
import { render } from 'enzyme';
import 'jest-styled-components'
import LinkedImage from '../index';

const imageData = {
    url: "/",
    image: "/test.png",
    title: "imagen de prueba"
};

describe('LinkedImage', function () {
    it('should render to title and contain imagen de prueba', function () {
        const text = render(<LinkedImage url={imageData.url} image={imageData.image} title={imageData.title} />).html();
        expect(text).toMatch(/imagen de prueba/);
    });
    it('Basic render snapshot not change', function () {
        const tree = render(<LinkedImage url={imageData.url} image={imageData.image} />);
        expect(tree).toMatchSnapshot();
    });
    it('Complete render snapshot not change', function () {
        const tree = render(<LinkedImage url={imageData.url} image={imageData.image} title={imageData.title} />);
        expect(tree).toMatchSnapshot();
    });
});