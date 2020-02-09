import styled from 'styled-components';
import LinkedImage from '../LinkedImage';
import Nav from '../Nav';
import {device, colors} from '../Utils';
import Logo from '../Logo';


const Header = () => {
    return (
        <Wrapper>
            <Logo />
            <Nav />
        </Wrapper>
    )
}
export default Header;

const Wrapper = styled.header`
    align-items: center;
    border-bottom: 1px solid ${colors.silver};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 0 60px 0; 
    width: 100%;
`;