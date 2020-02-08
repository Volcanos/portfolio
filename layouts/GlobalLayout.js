import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import {colors, device} from '../components/Utils';

const GlobalLayout = (props) => {
    return (
        <React.Fragment>
            <GlobalStyles />
            {props.children}
        </React.Fragment>
    );
}
export default GlobalLayout;

const GlobalStyles = createGlobalStyle`
    body, html {
        margin: 0;
        padding: 0;
    }
    div, a, p, h1, h2, h3, h4, h5, h6 {
        color: ${colors.black};
    }
`;

const GlobalWrapper = styled.div`
    color: ${colors.black};
`; 
