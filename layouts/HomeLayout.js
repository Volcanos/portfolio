import styled from 'styled-components';
import GlobalLayout from './GlobalLayout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {ContentWrapper} from '../components/Utils';

const HomeLayout = (props) => {
    return (
        <GlobalLayout>
            <Header />
            <HomeWrapper>
                {props.children}
            </HomeWrapper>
            <Footer />
        </GlobalLayout>
    );
}

export default HomeLayout;

const HomeWrapper = styled(ContentWrapper)`
    justify-content: center;
`; 