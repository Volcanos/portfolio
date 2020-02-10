import React from 'react';
import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';
import {colors} from '../components/Utils';

const GlobalLayout = (props) => {
    return (
        <React.Fragment>
            <Head>
                <title>Borja Gracia Martín - Portfolio</title>
                <link href="https://fonts.googleapis.com/css?family=Advent+Pro:300,500|Montserrat:300&display=swap" rel="stylesheet" />
                <link rel="shortcut icon" type="image/png" href="/images/favicon.png" />
            </Head>            
            <GlobalStyles />
            <GlobalWrapper>
                {props.children}
            </GlobalWrapper>
        </React.Fragment>
    );
}
export default GlobalLayout;

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    :root {
        font-size: 16px;
    }
    body, html {
        font-family: 'Montserrat', sans-serif;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    div, a, p, h1, h2, h3, h4, h5, h6 {
        color: ${colors.black};
    }
    h1, h2, h3 {
        font-family: 'Advent Pro', sans-serif;
        font-weight: 500;
    }
    h3, h4 {
        font-weight: 300;
    }
    img {
        max-width: 100%;
        width: 100%;
    }
    #__next {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
`;

const GlobalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding: 30px 0;
`; 
