import React from "react";
import styled from "styled-components";

const ProfilePageContainer = styled.div`
  max-width: 600px;
  background: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  font-family: Arial, sans-serif;
  margin: 20px auto;
`;

const Banner = styled.div`
  background-image: url("https://cdn.vectorstock.com/i/500p/23/07/web-blue-banner-software-ui-and-development-vector-42172307.jpg");
  background-size: cover;
  background-position: center;
  height: 150px;
`;

const ProfilePicture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid white;
  margin: -50px auto 0;
  display: block;
`;

const ProfileInfo = styled.div`
  text-align: center;
  padding: 16px;
`;

const Name = styled.h2`
  margin: 8px 0;
  font-size: 1.5em;
`;

const Title = styled.p`
  margin: 4px 0;
  color: #666;
`;

const Section = styled.div`
  padding: 16px;
  border-top: 1px solid #ddd;
`;

const SectionTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 1.2em;
  color: #0073b1;
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin: 8px 0;
`;

const Badge = styled.span`
  display: inline-block;
  background: linear-gradient(90deg, #0073b1, #005582);
  color: white;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 0.9em;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Progress = styled.div`
  margin: 8px 0;
`;

const ProgressLabel = styled.div`
  font-size: 0.9em;
  color: #333;
`;

const ProgressBar = styled.div`
  background: #ddd;
  border-radius: 4px;
  overflow: hidden;
  height: 10px;
  margin-top: 4px;
`;

const ProgressFill = styled.div`
  background: #0073b1;
  height: 100%;
  width: ${({ level }) => level}%;
`;

const SkillLevel = styled.span`
  font-size: 0.9em;
  font-style: italic;
  color: ${({ level }) =>
    level === "Beginner"
      ? "#f39c12"
      : level === "Intermediate"
      ? "#2980b9"
      : "#27ae60"};
`;

const ProfilePage = () => {
  return (
    <ProfilePageContainer>
      <Banner />
      <ProfilePicture
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhuK2yF9SqI7kmpz-lEct85j_mNWw68SjkMQ&s"
        alt="Profile"
      />
      <ProfileInfo>
        <Name>Artemis Lux</Name>
        <Title>Internal Manager at Uplift Media</Title>
      </ProfileInfo>

      <Section>
        <SectionTitle>Badges</SectionTitle>
        <BadgeContainer>
          <Badge>SEO Expert</Badge>
          <Badge>Marketing Enthusiast</Badge>
          <Badge>Programming Beginner</Badge>
        </BadgeContainer>
      </Section>

      <Section>
        <SectionTitle>Education</SectionTitle>
        <p>
          <strong>SPŠE Piešťany</strong> - Informatic and Digital Technologies<br />
          <small>Graduating: 2025</small>
        </p>
      </Section>

      <Section>
        <SectionTitle>Skills</SectionTitle>
        <Progress>
          <ProgressLabel>JavaScript</ProgressLabel>
          <ProgressBar>
            <ProgressFill level={75} />
          </ProgressBar>
          <SkillLevel level="Intermediate">Intermediate</SkillLevel>
        </Progress>
        <Progress>
          <ProgressLabel>React</ProgressLabel>
          <ProgressBar>
            <ProgressFill level={60} />
          </ProgressBar>
          <SkillLevel level="Intermediate">Intermediate</SkillLevel>
        </Progress>
        <Progress>
          <ProgressLabel>HTML/CSS</ProgressLabel>
          <ProgressBar>
            <ProgressFill level={85} />
          </ProgressBar>
          <SkillLevel level="Advanced">Advanced</SkillLevel>
        </Progress>
      </Section>

      <Section>
        <SectionTitle>Experiences</SectionTitle>
        <div>
          <strong>Internal Manager</strong> at Uplift Media<br />
          <small>March 2023 - Present</small>
        </div>
        <div>
          <strong>Freelance SEO Specialist</strong><br />
          <small>January 2022 - March 2023</small>
        </div>
      </Section>
    </ProfilePageContainer>
  );
};

export default ProfilePage;
