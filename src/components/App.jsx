import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notifications } from './Statistics/Notifications';

import { Container } from './Feedback/FeedbackOptions.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Number(
      Math.round((this.state.good / this.countTotalFeedback()) * 100)
    );
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const countFeedback = this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countFeedback}
            />
          ) : (
            <Notifications message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
