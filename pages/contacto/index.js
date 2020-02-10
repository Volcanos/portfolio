import styled from 'styled-components';
import HomeLayout from '../../layouts/HomeLayout';
import {mail, colors} from '../../components/Utils';

const handleClick = () => {
    let formedEmail = mail.reduce((a, v) => v === "#" ? a + "@" : a + v, "");
    window.open(`mailto:${formedEmail}`);
}

const Contacto = () => {
    return (
        <HomeLayout>
            <ContentWrapper>
                Si quieres ponerte en contacto conmigo mándame un email pinchando {<Link onClick={handleClick}>aquí</Link>}.
            </ContentWrapper>
        </HomeLayout>
    )
}
export default Contacto;

const ContentWrapper = styled.div`
    margin-bottom: 20%;
`;
const Link = styled.a`
    display: inline-block;
    position: relative;
    &:hover {
        color: ${colors.grey};
        cursor: pointer;

        &:before,
        &:after {
            width: 50%;
            opacity: 1;
        }
    }

    &:before,
    &:after {
        content: "";
        position: absolute;
        bottom: 0px;
        width: 0px;
        height: 1px;
        margin: 2px 0 0;
        transition: all 0.2s ease-in-out;
        transition-duration: 0.65s;
        opacity: 0;
        background-color: ${colors.grey};
    }
    &:before {
        left: 50%;
    }
    &:after {
        right: 50%;
    }
`;