import { Message } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Notifications = ({ message }) => {
  return <Message>{message}</Message>;
};

Notifications.propTypes = {
  message: PropTypes.string.isRequired,
};
