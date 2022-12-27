import styled from 'styled-components';

const Friend = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;

  padding: 16px;

  background-color: #ffffff;

  border: 1px solid #e0e5eb;
  border-radius: 5px;

  cursor: pointer;

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;

const Status = styled.span`
  width: 24px;
  height: 24px;
  border-radius: 50%;

  ${props => {
    return props.status ? 'background-color: green' : 'background-color: red';
  }}
`;

const Avatar = styled.img`
  border-radius: 5px;
`;

const Name = styled.p`
  font-size: 24px;
`;

export { Friend, Status, Avatar, Name };
