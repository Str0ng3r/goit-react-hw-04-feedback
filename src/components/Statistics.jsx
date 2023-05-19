import { Notification } from './Notification';
import propTypes from 'prop-types';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
        <div>
          {total() === 0 ? <Notification message={'Plz click'}></Notification> : <div><p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total()}</p>
          <p>Positive feedback: {positivePercentage()}%</p></div>}
        </div>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.func.isRequired,
  positivePercentage: propTypes.func.isRequired,
};
