import styled from 'styled-components';
import PageLayout from '../layouts/PageLayout';
import ProjectListElement from '../components/ProjectListElement';

const content = [
    {
        url: '/push-your-kpis',
        mainImage: 'https://dummyimage.com/960x430/ccc/fff',
        title: 'Push Your KPIs',
        subtitle: 'Web + aplicación'
    },
    {
        url: '/push-your-kpis',
        mainImage: 'https://dummyimage.com/960x430/ccc/fff',
        title: 'Push Your KPIs',
        subtitle: 'Web + aplicación'
    },
    {
        url: '/push-your-kpis',
        mainImage: 'https://dummyimage.com/960x430/ccc/fff',
        title: 'Push Your KPIs',
        subtitle: 'Web + aplicación'
    },
    {
        url: '/push-your-kpis',
        mainImage: 'https://dummyimage.com/960x430/ccc/fff',
        title: 'Push Your KPIs',
        subtitle: 'Web + aplicación'
    }
]

const Portfolio = () => {
    return (
        <PageLayout>
            <ContentWrapper>
                <TitleSection>Portfolio</TitleSection>
                {content.map((element) => 
                    <ProjectListElement {...element} />
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