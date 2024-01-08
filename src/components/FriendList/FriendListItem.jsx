import PropTypes from "prop-types";
import { FriendName, Status, Avatar } from "./FriendListItem.styled";

export default function FriendListItem({ avatar, name, isOnline }) {
  const statusColor = isOnline ? "green" : "red";
  const statusText = isOnline ? "Online" : "Offline";
  return (
    <>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
      <Status style={{ color: statusColor }}>{statusText}</Status>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
