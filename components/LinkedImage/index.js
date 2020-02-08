import styled from 'styled-components';
import Anchor from '../Anchor';

const LinkedImage = ({url, image, title}) => {
    return (
        <Anchor url={url} title={title}>
            <img src={image} />
        </Anchor>
    )
}
export default LinkedImage;