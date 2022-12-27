import PropTypes from 'prop-types';
import {
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
} from './Profile.styled';

export function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <ProfileCard>
      <ProfileDescription>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </ProfileDescription>

      <ProfileStatistics>
        <StaticticsItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StaticticsItem>
        <StaticticsItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StaticticsItem>
        <StaticticsItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StaticticsItem>
      </ProfileStatistics>
    </ProfileCard>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
