import styled from 'styled-components';
import GlobalLayout from './GlobalLayout';
import Header from '../components/Header';
import {ContentWrapper} from '../components/Utils';

const PageLayout = (props) => {
    return (
        <GlobalLayout>
            <Header />
            <PageWrapper>
                {props.children}
            </PageWrapper>
        </GlobalLayout>
    );
}

export default PageLayout;

const PageWrapper = styled(ContentWrapper)`
    justify-content: flex-start;
`; 