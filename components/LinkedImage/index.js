import Link from 'next/link';
import styled from 'styled-components';

const LinkedImage = ({url, image, title}) => {
    return (
        <Link href={url}>
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
    }
`;