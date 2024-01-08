import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import { Friends, Friend } from "./FriendList.styled";

export default function FriendList({ items }) {
  return (
    <Friends>
      {items.map(({ avatar, name, isOnline, id }) => (
        <Friend key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </Friend>
      ))}
    </Friends>
  );
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
