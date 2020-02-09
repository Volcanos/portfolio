import styled from 'styled-components';
import {colors} from '../Utils';


const Footer = () => {
    return (
        <Wrapper>
            Diseñado y maquetado por Borja Gracia Martín
            { <a href="https://github.com/Volcanos/portfolio" target="_blank">GitHub</a> }
        </Wrapper>
    )
}
export default Footer;

const Wrapper = styled.footer`
    align-items: center;
    border-top: 1px solid ${colors.silver};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 60px auto 0;
    padding: 20px 0; 
    width: 100%;
    font-size: .8rem;
`;