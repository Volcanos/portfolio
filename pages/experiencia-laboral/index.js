import React from 'react';
import styled from 'styled-components';
import PageLayout from '../../layouts/PageLayout';
import {content} from './content';
import {colors} from '../../components/Utils';

const ExperienciaLaboral = () => {
    return (
        <PageLayout>
            <ContentWrapper>
                <TitleSection>Experiencia laboral</TitleSection>
                <ColumnWrapper>
                    {content &&
                        content.map((element, i) => 
                            <JobSeparator key={i}>
                                    <TitleJob>{element.company}</TitleJob>
                                <RowData>
                                    <LabelCell>Fecha:</LabelCell>
                                    <DataCell>{element.dateInit} / {element.dateEnd}</DataCell>
                                </RowData>
                                <RowData>
                                    <LabelCell>Duración:</LabelCell>
                                    <DataCell>{element.duration}</DataCell>
                                </RowData>
                                <RowData>
                                    <LabelCell>Descripción:</LabelCell>
                                    <DataCell>{element.description}</DataCell>
                                </RowData>
                                {element.tags &&
                                    <RowData>
                                        <LabelCell>Tags:</LabelCell>
                                        <DataCell>{element.tags.map((e, i) => i <= 0 ? e : `, ${e}` )}</DataCell>
                                    </RowData>
                                }
                            </JobSeparator>
                        )
                    }
                </ColumnWrapper>
            </ContentWrapper>
        </PageLayout>
    )
}
export default ExperienciaLaboral;

const ContentWrapper = styled.div`
    margin-top: 4rem;
`;
const TitleSection = styled.h3`
    margin-bottom: 2rem;
    text-align: center;
`;
const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;
const JobSeparator = styled.div`
    border-bottom: 1px solid ${colors.silver};
    width: 100%;
    padding: 2rem 0;
`;
const TitleJob = styled.h4`
    text-align: center;
    margin-bottom: 1.2rem;
`;
const RowData = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    min-width: 100%;
    margin-bottom: .3rem;
`;
const LabelCell = styled.div`
    width: 150px;
    text-align: right;
    margin-right: 1rem;
    font-family: 'Advent Pro',sans-serif;
    font-size: 1.2rem;
    line-height: 1rem;
    color: ${colors.grey};
`;
const DataCell = styled.div`
    width: 450px;
    line-height: 1rem;
    padding-top: 2px;
    color: ${colors.grey};
    font-size: .9rem;
`;