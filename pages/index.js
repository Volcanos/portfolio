import styled from 'styled-components';
import HomeLayout from '../layouts/HomeLayout';


const Index = () => {
    return (
        <HomeLayout>
            <ContentWrapper>
                <ParagraphWrapper>
                    <img src='/images/borja.jpg' title='Borja, programador web' />
                </ParagraphWrapper>
                <ParagraphWrapper>
                    Desarrollador web desde hace más de 10 años. Especializado en tecnologías frontend como ReactJS, React Native o Javascript puro, también tengo un amplio conocimiento del desarrollo backend siendo Javascript y PHP los lenguajes que más domino.
                </ParagraphWrapper>
                <ParagraphWrapper>
                    Haber trabajado como freelance me ha permitido tener una visión global de todas la fases de un proyecto de desarrollo web. Desde el análisis de objetivos y la toma de requisitos, pasando por el diseño de UX, el desarrollo, testeo y puesta en producción.
                </ParagraphWrapper>
                <ParagraphWrapper>
                    Busco nuevos proyectos con los que seguir creciendo y aprendiendo y en los que pueda aportar mi experiencia y mi resolución.
                </ParagraphWrapper>
            </ContentWrapper>
        </HomeLayout>
    )
}
export default Index;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;
    max-width: 750px;
`;
const ParagraphWrapper = styled.div`
    margin-bottom: 1.5rem;
`;