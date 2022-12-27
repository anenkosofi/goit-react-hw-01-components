import styled from 'styled-components';

const ProfileCard = styled.div`
  margin: 0 auto;
  width: 315px;

  background-color: #fefefe;
  border: 1px solid #e0e5eb;
  border-radius: 5px;

  cursor: pointer;
  overflow: hidden;

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;

const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px;
`;

const Avatar = styled.img`
  margin-bottom: 32px;
  width: 125px;

  border-radius: 50px;
`;

const Name = styled.p`
  margin-bottom: 16px;

  font-size: 24px;
  font-weight: bold;
`;

const Tag = styled.p`
  margin-bottom: 16px;

  font-size: 18px;

  color: #939ca3;
`;

const Location = styled.p`
  font-size: 18px;

  color: #939ca3;
`;

const ProfileStatistics = styled.ul`
  display: flex;

  background-color: #f2f6f9;
`;

const StaticticsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  width: 105px;
  padding: 24px 12px;

  border: 1px solid #e0e5eb;
  border-left: none;
  border-bottom: none;

  :last-child {
    border-right: none;
  }
`;

const Label = styled.span`
  color: #939ca3;
`;

const Quantity = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export {
  ProfileCard,
  ProfileDescription,
  Avatar,
  Name,
  Tag,
  Location,
  ProfileStatistics,
  StaticticsItem,
  Label,
  Quantity,
};
