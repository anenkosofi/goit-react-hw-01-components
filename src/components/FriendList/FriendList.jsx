import PropTypes from 'prop-types';
import { Friends } from './FriendList.styled';
import { FriendListItem } from '../FriendListItem';

export function FriendList({ friends }) {
  return (
    <Friends>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </Friends>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
