import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);
    outline: 0;
    transform: translate(-4px, -4px);
  
    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
      filter: none; /* Remove grayscale and contrast filters */
      mix-blend-mode: normal; /* Reset mix-blend-mode to normal */
    }
  
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }
  
    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }
  
    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
      transform: translate(8px, 8px); /* Apply the transform that was originally on hover */
    }
  }  
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Python', 'Flask', 'FastAPI', 'JavaScript', 'Node.js', 'Express.js', 'React', 'Java', 'Spring Boot', 'JUnit', 'Mockito', 'PostgreSQL', 'MYSQL', 'MongoDB', , 'Redis', 'Docker', 'AWS', 'GCP', 'Machine Learning', 'Computer Vision'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Atharva and I enjoy creating things that solve real-life problems.
              I always love to take on challenging projects and explore new stuff!
              I am humbled to share that my endeavors have been recognized by esteemed personalities, 
              including the Hon'ble Vice President of India Shri Jagdeep Dhankhar, and the Hon'ble Minister of Education, Shri Dharmendra Pradhan.
              I am the winner of UNESCO India - Africa International Hackathon 2022 as well as the Smart India Hackathon 2022.
            </p>

            <p>
            I am driven by the conviction that technology can be a powerful tool for problem-solving, enhancing lives, and simplifying complexities. 
            With an unwavering commitment to this vision, I strive to make a meaningful impact through my work. Previously I have worked at{' '}
              <a href="https://home.barclays/">Barclays</a>,{' '}
              <a href="https://decentro.tech/">Decentro</a>,{' '}
              <a href="https://www.carnot.co.in/">Carnot Technologies</a>, and{' '}
              <a href="https://www.linkedin.com/company/seekmy">Seekmy Technology</a>.
            </p>

            <p>Here are a few technologies that I’ve worked with:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me_2.jpeg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
