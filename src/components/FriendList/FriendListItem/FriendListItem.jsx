import PropTypes from 'prop-types';
import { Friend, Status, Avatar, Name } from './FriendListItem.styled';

export function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <Friend>
      <Status isOnline={isOnline} />
      <Avatar src={avatar} alt="User avatar" width="86" />
      <Name>{name}</Name>
    </Friend>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.exact({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
