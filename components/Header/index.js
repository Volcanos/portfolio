import styled from 'styled-components';
import LinkedImage from '../LinkedImage';
import Nav from '../Nav';
import {device} from '../Utils';
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    @media ${device.laptop} {
        max-width: 1000px;
    }
`;