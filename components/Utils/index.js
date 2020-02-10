import styled from 'styled-components';

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}
export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};
export const colors = {
    black: '#252525',
    grey: '#6f6f6f',
    silver: '#e8e8e8'
}
export const menuStructure = [
    {title: "Home", url: "/"},
    {title: "Portfolio", url: "/portfolio"},
    {title: "Experiencia laboral", url: "/experiencia-laboral"},
    {title: "Contacto", url: "/contacto"},
]
export const layoutSettings = {
    maxWidth: '960px'
}
export const ContentWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    max-width: 100%;
    margin: 0 30px;

    @media ${device.laptop} {
        max-width: ${layoutSettings.maxWidth};
        margin: 0px auto;
    }
`;
export const mail = ['borja','.','gracia','+cv','#','gmail','.com'];