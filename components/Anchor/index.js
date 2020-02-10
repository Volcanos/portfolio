import Link from 'next/link';
import styled from 'styled-components';
import {colors} from '../Utils';

const Anchor = (props) => {
    let prefetch = typeof props.prefetch !== 'undefined' ? props.prefetch : true;
    let properties = prefetch ? {href: props.url, as: props.as} : {href: props.url, as: props.as, prefetch: false};
    return (
        <Link {...properties}>
            <AnchorS style={props.style}>
                {props.children}
            </AnchorS>
        </Link>
    )
}
export default Anchor;

const AnchorS = styled.a`
    font-size: ${props => props.fontSize || '1rem'};
    text-decoration: none;
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