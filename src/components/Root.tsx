import styled, { keyframes } from 'styled-components';

import Button from './common/Button';
import RightArrow from '../assets/svgs/RightArrow';

const RootContainer = styled.main`
  color: #fff;
  width: 60vw;
  margin: 100px auto 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 90vw;
    margin: 7vh auto 0;
  }
`;

const slideInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const RootTitle = styled.h1`
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 60px;
  margin-bottom: 30px;
  animation: ${slideInAnimation} 0.9s ease forwards;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    line-height: 30px;
    margin-bottom: 20px;
  }
`;

const RootContext = styled.p`
  width: 70%;
  font-size: 1.2rem;
  line-height: 35px;
  color: #c8d0ea;
  margin-bottom: 30px;
  animation: ${slideInAnimation} 0.9s ease forwards;

  @media (max-width: 768px) {
    width: 90%;
    font-size: 1.1rem;
    line-height: 25px;
  }
`;

export default function Root() {
  return (
    <RootContainer>
      <RootTitle>
        DocQuest: <br />
        Empowering your documents with AI
      </RootTitle>
      <RootContext>
        DocQuest is an AI-powered app for extracting insights from PDFs, DOCX,
        and PNG files. It provides quick, accurate answers and summarization,
        eliminating manual searching. With an intuitive interface and
        intelligent algorithms, it understands context and handles complex
        queries. DocQuest ensures secure and efficient document analysis with
        session history.
      </RootContext>
      <Button primary="primary" icon={<RightArrow />}>
        Give it a try
      </Button>
    </RootContainer>
  );
}