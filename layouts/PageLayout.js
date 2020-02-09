import styled from 'styled-components';
import GlobalLayout from './GlobalLayout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {ContentWrapper} from '../components/Utils';

const PageLayout = (props) => {
    return (
        <GlobalLayout>
            <Header />
            <PageWrapper>
                {props.children}
            </PageWrapper>
            <Footer />
        </GlobalLayout>
    );
}

export default PageLayout;

const PageWrapper = styled(ContentWrapper)`
    justify-content: flex-start;
`; 