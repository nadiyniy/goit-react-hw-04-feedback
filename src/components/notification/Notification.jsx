import { StyledNotificationP } from './Notification.style';
import propTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <StyledNotificationP>{message}</StyledNotificationP>;
};

Notification.propTypes = {
  message: propTypes.string.isRequired,
};
