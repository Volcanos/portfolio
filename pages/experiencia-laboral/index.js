import React from 'react';
import styled from 'styled-components';
import PageLayout from '../../layouts/PageLayout';
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

export const content = [
    {
        company: 'Blink Learning',
        dateInit: '2018',
        dateEnd: 'actualidad',
        duration: '2 años',
        description: 'Responsable del equipo de desarrollo front-end con seis personas a mi cargo. Desarrollo del proyecto de renovación de la interface de la plataforma con la tecnología React Native.',
        tags: ['React Native', 'ES6', 'Functional programming', 'Redux', 'Webpack', 'Jest', 'Styled components']
    },
    {
        company: 'Páginas Amarillas',
        dateInit: '2011',
        dateEnd: '2018',
        duration: '7 años',
        description: 'Programador web full stack. Desarrollo de herramientas internas para el equipo de fulfillment y supervisión de los desarrollos de estudios externos.',
        tags: ['Javascript', 'AngularJs', 'PHP', 'API']
    },
    {
        company: 'Código Visual',
        dateInit: '2007',
        dateEnd: '2011',
        duration: '4 años',
        description: 'Desarrollador web full stack. Desarrollo de proyectos web completos para clientes como Michelin, Häagen-Dazs, Euromaster, Agencia Española de Anunciantes...',
        tags: ['Wordpress', 'Javascript', 'PHP', 'API', 'ActionScript']
    },
    {
        company: 'Escuela Trazos',
        dateInit: '2007',
        dateEnd: '2007',
        duration: '2 meses',
        description: 'Profesor susituto de Adobe Flash y ActionScript.',
        tags: ['Adobe Flash', 'ActionScript']
    },
    {
        company: 'Novotecni',
        dateInit: '2007',
        dateEnd: '2007',
        duration: '6 meses',
        description: 'Digitalización de mapas catastrales.'
    },
    {
        company: 'Editorial Bruño',
        dateInit: '2001',
        dateEnd: '2007',
        duration: '6 años',
        description: 'Administrativo y gestión de control.'
    }
];