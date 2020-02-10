import Link from 'next/link';
import styled from 'styled-components';
import {colors} from '../Utils';

const LinkedImage = ({url, image, title, prefetch = true}) => {
    return (
        <Link href={url} prefetch={prefetch}>
            <AnchorS>
                <img src={image} title={title} />
            </AnchorS>
        </Link>
    )
}
export default LinkedImage;

const AnchorS = styled.a`
    display: block;
    &:hover {
        cursor: pointer;
        & img {
            opacity: .8;
        }
    }
    & img {
        transition: all 0.2s ease-in-out;
    }
`;