import React from 'react'
import { render } from 'enzyme';
import 'jest-styled-components'
import ProjectListElement from '../index';

export const content = {
    url: '/portfolio/push-your-kpis',
    mainImage: '/images/push1.png',
    title: 'Push Your KPIs',
    subtitle: 'Web',
    tags: ['Statamic', 'Laravel', 'React Native', 'Mobile', 'API', 'Notifications', 'Android', 'iOS'],
    web: {url: 'https://pushyourkpis.com', label: 'pushyourkpis.com'},
    description: 'El proyecto de Push Your KPIs consiste, en un administrador simple en que el usuario puede gestionar sus indicadores, y en una app para que los empleados puedan hacer seguimiento de esos mismos indicadores. Además el gestor tiene la capacidad de enviar mensajes push filtrados para poder incentivar o informar a los empleados. Este proyecto se realizó con el CMS Statamic que trabaja sobre Laravel. Para la aplicación se utilizó React Native para el desarrollo completo de las aplicaciones para dispositivos Android e iOS.',
    listImages: [
        '/images/push2.png',
        '/images/push3.png',
    ]
}

describe('ProjectListElement', function () {
    it('should render title and subtitle', function () {
        const text = render(<ProjectListElement {...content} />).html();
        expect(text).toMatch(/Push Your KPIs/);
        expect(text).toMatch(/Web/);
    });
    it('should render image', function () {
        const text = render(<ProjectListElement {...content} />).html();
        expect(text).toMatch(/img/);
    });
    it('render snapshot not change', function () {
        const tree = render(<ProjectListElement {...content} />);
        expect(tree).toMatchSnapshot();
    });
});