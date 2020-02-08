import styled from 'styled-components';
import GlobalLayout from './GlobalLayout';
import Header from '../components/Header';

const HomeLayout = (props) => {
    return (
        <GlobalLayout>
            <Header />
            {props.children}
        </GlobalLayout>
    );
}

export default HomeLayout;

const ContentDiv = styled.div`
    
`;