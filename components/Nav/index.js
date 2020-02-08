import styled from 'styled-components';
import Anchor from '../Anchor';

const menu = [
    {title: "Home", url: "/"}
]

const Nav = () => {
    return (
        <nav>
            <List>
                {menu.map((element, i) => {
                    return (
                        <Element key={i}>
                            <Anchor url={element.url} title={element.title}>
                                {element.title}
                            </Anchor>
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