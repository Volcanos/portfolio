import Link from 'next/link';
import styled from 'styled-components';

const Anchor = (props) => {
    return (
        <Link href={props.url}>
            <AnchorS>
                {props.children}
            </AnchorS>
        </Link>
    )
}
export default Anchor;

const AnchorS = styled.a`
    text-decoration: none;
    &:hover {
        cursor: pointer;
    }
`;