import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { usePrefersReducedMotion } from '@hooks';

const StyledAchievementsSection = styled.section`
  max-width: 900px;

  .inner {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

const StyledTrophyCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 30px;
  border-radius: var(--border-radius);
  background-color: var(--light-navy);
  border: 1px solid var(--green);
  box-shadow: 0 0 15px rgba(229, 184, 66, 0.1);
  transition: var(--transition);

  &:hover {
    box-shadow: 0 0 25px rgba(229, 184, 66, 0.2);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .content {
    flex: 1;

    h3 {
      color: var(--lightest-slate);
      font-size: clamp(var(--fz-lg), 5vw, var(--fz-xxl));
      margin-bottom: 10px;
    }

    .status {
      color: var(--green);
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
      margin-bottom: 15px;
      display: inline-block;
      padding: 5px 10px;
      background-color: rgba(229, 184, 66, 0.1);
      border-radius: var(--border-radius);
    }

    p {
      color: var(--light-slate);
      font-size: var(--fz-lg);
      margin-bottom: 0;

      strong {
        color: var(--white);
        font-weight: 500;
      }
    }
  }

  .icon {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: rgba(229, 184, 66, 0.1);
    color: var(--green);
    margin-left: 30px;

    @media (max-width: 768px) {
      margin-left: 0;
    }

    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

const Achievements = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const trophies = [
    {
      title: 'UNESCO India-Africa Hackathon',
      status: '🏆 Global Winner',
      description: (
        <>
          Secured top honors internationally along with a cash prize of <strong>₹3 Lakh</strong>.{' '}
          <strong>Felicitated by the Vice President of India</strong> for developing the{' '}
          <strong>Acid-Base Disorders in COPD</strong> analysis system under immense time pressure.
        </>
      ),
    },
    {
      title: 'Smart India Hackathon',
      status: '🥇 National Winner',
      description: (
        <>
          Emerged victorious on a national scale with a cash prize of <strong>₹1.5 Lakh</strong>,
          beating thousands of competing teams to deliver a secure, high-impact{' '}
          <strong>One Point Student-Faculty verification portal</strong> for colleges and AICTE.
        </>
      ),
    },
  ];

  return (
    <StyledAchievementsSection id="achievements" ref={revealContainer}>
      <h2 className="numbered-heading">Trophy Case</h2>

      <div className="inner">
        {trophies.map((trophy, i) => (
          <StyledTrophyCard key={i}>
            <div className="content">
              <h3>{trophy.title}</h3>
              <div className="status">{trophy.status}</div>
              <p>{trophy.description}</p>
            </div>
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                <path d="M4 22h16"></path>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
              </svg>
            </div>
          </StyledTrophyCard>
        ))}
      </div>
    </StyledAchievementsSection>
  );
};

export default Achievements;
