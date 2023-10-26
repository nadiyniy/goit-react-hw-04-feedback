import React from 'react';
import { Statistics } from './statistics/Statistics';
import { FeedbackOptions } from './feedback-options/FeedbackOptions';
import { Section } from './section/Section';
import { Notification } from './notification/Notification';
import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackIncrement = name => {
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);

        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);

        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);

        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Number(((good / total) * 100).toFixed(2));
  };

  const total = countTotalFeedback();
  const optionsKey = ['good', 'neutral', 'bad'];
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '0 auto',
        height: 'auto',
        fontSize: 13,
        color: '#010101',
        textAlign: 'center',
        alignItems: 'center',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionsKey}
          onLeaveFeedback={feedbackIncrement}
        />
      </Section>
      <Section title="Statistic">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
