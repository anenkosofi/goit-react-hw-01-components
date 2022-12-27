import styled from 'styled-components';

const Stats = styled.section`
  margin: 0 auto;
  width: 500px;

  border-radius: 5px;
  overflow: hidden;
`;

const Title = styled.h2`
  padding: 44px;

  text-transform: uppercase;
  text-align: center;

  color: #4c5457;
  background-color: #ffffff;
`;

const StatList = styled.ul`
  display: flex;
`;

const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  width: 100px;
  padding: 16px 0;

  color: #fefefe;
  background-color: ${getRandomHexColor};
`;

const Label = styled.span``;

const Percentage = styled.span`
  font-size: 28px;
`;

export { Stats, Title, StatList, StatItem, Label, Percentage };

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
