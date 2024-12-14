import React from "react";
import styled from "styled-components";

const ProfileCardContainer = styled.div`
  max-width: 400px;
  background: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  font-family: Arial, sans-serif;
`;

const Banner = styled.div`
  background-image: url("https://via.placeholder.com/400x150"); /* Replace with your background image URL */
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

const Tags = styled.div`
  margin: 8px 0;
  color: #0073b1;
`;

const ActionButton = styled.a`
  display: inline-block;
  background-color: #0073b1;
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  margin: 16px 8px;
  border-radius: 20px;
  font-weight: bold;
  &:hover {
    background-color: #005582;
  }
`;

const ProfileCard = () => {
  return (
    <ProfileCardContainer>
      <Banner />
      <ProfilePicture src="https://via.placeholder.com/100" alt="Profile" /> {/* Replace with your profile picture URL */}
      <ProfileInfo>
        <Name>Alex Wentz</Name>
        <Title>Software Engineer at Kin + Carta</Title>
        <Tags>#learning #earlycareer #programming</Tags>
        <ActionButton href="https://fromwentzitcame.com">Visit Website</ActionButton>
      </ProfileInfo>
    </ProfileCardContainer>
  );
};

export default ProfileCard;
