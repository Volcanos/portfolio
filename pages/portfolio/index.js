import styled from 'styled-components';
import PageLayout from '../../layouts/PageLayout';
import ProjectListElement from '../../components/ProjectListElement';
import {content} from './content';

const Portfolio = () => {
    return (
        <PageLayout>
            <ContentWrapper>
                <TitleSection>Portfolio</TitleSection>
                {content.map((element, i) => 
                    <ProjectListElement key={i} {...element} />
                )}
            </ContentWrapper>
        </PageLayout>
    )
}
export default Portfolio;

const ContentWrapper = styled.div`
    margin-top: 4rem;
    text-align: center;
`;

const TitleSection = styled.h3`
    margin-bottom: 2rem;
`;