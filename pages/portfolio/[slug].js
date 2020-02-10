import { useRouter } from 'next/router';
import styled from 'styled-components';
import PageLayout from '../../layouts/PageLayout';
import {content} from './content';
import {colors, device} from '../../components/Utils';

const Project = () => {
    const router = useRouter();
    const { slug } = router.query;
    let {mainImage, title, subtitle, tags, github, description, web, listImages} = {...content.reduce((acc, elem) => elem.url === `/portfolio/${slug}` ? elem : acc , {})};
    return (
        <PageLayout>
            <ContentWrapper>
                <img src={mainImage} title={title} />
                <ColumnsWrapper>
                    <ColumnData>
                        <TitleProject>{title}</TitleProject>
                        <SubitleProject>{subtitle}</SubitleProject>
                        <ListTags>
                            {tags && tags.map((element, i) => <Tag key={i}>{element}</Tag>)}
                        </ListTags>
                        {web && <GitAnchor href={web.url} target="_blank">{web.label}</GitAnchor>}
                        {github && <GitAnchor href={github} target="_blank">Repositorio</GitAnchor>}
                    </ColumnData>
                    <ColumnImages>
                        {description}
                        {listImages && listImages.map((element, i) => <ImageList key={i} src={element} />)}
                    </ColumnImages>
                </ColumnsWrapper>
            </ContentWrapper>
        </PageLayout>
    )
}

export default Project;

const ContentWrapper = styled.div`
    margin-top: 2rem;
    margin-bottom: 5rem;
`;
const ColumnsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 2rem;

    @media ${device.tablet} {
        flex-direction: row;
        justify-content: space-between;
    }
`;
const ColumnData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;

    @media ${device.tablet} {
        width: 34%;
        text-align: left;
        align-items: flex-start;
    }
`;
const ColumnImages = styled.div`
    display: flex;
    color: ${colors.grey};
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    width: 100%;

    @media ${device.tablet} {
        width: 67%;
        max-width: 635px;
    }
`;
const TitleProject = styled.h4`
    color: ${colors.grey};
    font-weight: 800;
    margin-bottom: 0rem;
`;
const SubitleProject = styled.p`
    color: ${colors.grey};
    font-size: 0.8rem;
    margin-bottom: 1rem;
`;
const ListTags = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 0 1rem 0;
    padding: 0;
`;
const Tag = styled.li`
    font-size: .8rem;
    margin-bottom: 2px;
    color: ${colors.grey};
`;
const GitAnchor = styled.a`
    width: min-content;
    margin-bottom: .2rem;
    display: inline-block;
    font-size: .8rem;
    color: ${colors.grey};
    text-decoration: none;
    position: relative;
    &:hover {
        color: ${colors.grey};
        cursor: pointer;

        &:before,
        &:after {
            width: 50%;
            opacity: 1;
        }
    }

    &:before,
    &:after {
        content: "";
        position: absolute;
        bottom: 0px;
        width: 0px;
        height: 1px;
        margin: 2px 0 0;
        transition: all 0.2s ease-in-out;;
        transition-duration: 0.65s;
        opacity: 0;
        background-color: ${colors.grey};
    }
    &:before {
        left: 50%;
    }
    &:after {
        right: 50%;
    }
`;
const ImageList = styled.img`
    margin-top: 2rem;
`;