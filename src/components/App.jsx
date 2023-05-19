import { useState } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedBackOptions';
import { Notification } from './Notification';
import { Section } from './Section';

export const App = () => {
  const [good, setgood] = useState(0);
  const [neutral,setneutral] = useState(0);
  const [bad,setbad] = useState(0)


  const handleLeaveFeedback = option => {
      option === 'bad'&& setbad(bad + 1);
      option === 'neutral' && setneutral(neutral + 1);
      option === 'good' && setgood(good + 1)
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleLeaveFeedback}
          />
        </Section>

        {countTotalFeedback === 0 ? (
          <Notification message="There is no feedback yet" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          </Section>
        )}
      </>
    );
  }