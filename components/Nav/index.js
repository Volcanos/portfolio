import styled from 'styled-components';
import Anchor from '../Anchor';
import {menuStructure, mail, colors} from '../Utils';

const handleClick = () => {
    let formedEmail = mail.reduce((a, v) => v === "#" ? a + "@" : a + v, "");
    window.open(`mailto:${formedEmail}`);
}

const Nav = () => {
    return (
        <nav>
            <List>
                {menuStructure.map((element, i) => {
                    return (
                        <Element key={i}>
                            {element.url === 'handleClick' ?
                                <Link onClick={handleClick}>
                                    {element.title}
                                </Link>
                                :
                                <Anchor url={element.url} title={element.title}>
                                    {element.title}
                                </Anchor>
                            }                            
                        </Element>
                    );
                })}
            </List>
        </nav>
    )
}
export default Nav;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;
const Element = styled.li`
    margin-left: 1em;
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