import styled from 'styled-components';
import {colors} from '../Utils';
import LinkedImage from '../LinkedImage';
import Anchor from '../Anchor';


const ProjectListElement = (props) => {
    const {url, title, mainImage, subtitle} = {...props}
    return (
        <ContentWrapper>
            <LinkedImage url={url} title={title} image={mainImage} />
            <TitleProject>{title}</TitleProject>
            <SubitleProject>{subtitle}</SubitleProject>
            <Anchor url='/portfolio/[slug]' as={url} fontSize=".8rem">Detalles</Anchor>
        </ContentWrapper>
    )
}
export default ProjectListElement;

const ContentWrapper = styled.div`
    margin-top: 2rem;
    margin-bottom: 5rem;
    text-align: center;
`;
const TitleProject = styled.h4`
    color: ${colors.grey};
    font-weight: 800;
    margin-bottom: 0rem;
    margin-top: 1rem;
`;
const SubitleProject = styled.p`
    color: ${colors.grey};
    font-size: 0.8rem;
    margin-bottom: 1rem;
`;