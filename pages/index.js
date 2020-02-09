import styled from 'styled-components';
import HomeLayout from '../layouts/HomeLayout';


const Index = () => {
    return (
        <HomeLayout>
            <ContentWrapper>
                Bienvenido a mi portfolio
            </ContentWrapper>
        </HomeLayout>
    )
}
export default Index;

const ContentWrapper = styled.div`
    margin-bottom: 20%;
`;