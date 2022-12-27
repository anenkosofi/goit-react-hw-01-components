import PropTypes from 'prop-types';
import { Friend, Status, Avatar, Name } from './FriendListItem.styled';

export function FriendListItem({ avatar, name, status }) {
  return (
    <Friend>
      <Status status={status} />
      <Avatar src={avatar} alt="User avatar" width="86" />
      <Name>{name}</Name>
    </Friend>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
