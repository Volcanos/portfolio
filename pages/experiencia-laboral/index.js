import React from 'react';
import styled from 'styled-components';
import PageLayout from '../../layouts/PageLayout';
import {colors, device} from '../../components/Utils';

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
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;
const JobSeparator = styled.div`
    border-bottom: 1px solid ${colors.silver};
    padding: 2rem 0;
    width: 100%;
`;
const TitleJob = styled.h4`
    margin-bottom: 1.2rem;
    text-align: center;
`;
const RowData = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: .5rem;
    width: 100%;
    max-width: 500px;
    @media ${device.tablet} {
        flex-direction: row;
        margin-bottom: .3rem;
        max-width: none;
    }
`;
const LabelCell = styled.div`
    color: ${colors.grey};
    font-family: 'Advent Pro',sans-serif;
    font-size: 1.2rem;
    line-height: 1rem;
    margin-right: 1rem;
    text-align: left;
    width: 100%;
    @media ${device.tablet} {
        text-align: right;
        width: 150px;
    }
`;
const DataCell = styled.div`
    color: ${colors.grey};
    font-size: .9rem;
    line-height: 1rem;
    padding-top: 2px;
    width: 100%;
    @media ${device.tablet} {
        width: 450px;
    }
`;

export const content = [
    {
        company: 'Blink Learning',
        dateInit: '2018',
        dateEnd: 'actualidad',
        duration: '2 años',
        description: 'Responsable del equipo de desarrollo front-end con cinco personas a mi cargo. Desarrollo del proyecto de renovación de la interface de la plataforma con la tecnología React Native.',
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