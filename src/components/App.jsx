import React from 'react';
import { Statistics } from './statistics/Statistics';
import { FeedbackOptions } from './feedback-options/FeedbackOptions';
import { Section } from './section/Section';
import { Notification } from './notification/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackIncrement = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Number(((this.state.good / total) * 100).toFixed(2));
  };

  render() {
    const total = this.countTotalFeedback();
    const optionsKey = Object.keys(this.state);
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
            onLeaveFeedback={this.feedbackIncrement}
          />
        </Section>
        <Section title="Statistic">
          {total > 0 ? (
            <Statistics
              {...this.state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
