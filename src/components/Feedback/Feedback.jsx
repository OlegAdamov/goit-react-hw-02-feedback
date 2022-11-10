import React from 'react';
import { Board, Info, Title, Notification } from './Feedback.styled';

export default class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (total, good) => {
    return total ? Math.ceil((good * 100) / total) : 0;
  };
  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback;
    const positive = this.countPositiveFeedbackPercentage;

    return (
      <>
        <Board>
          {options.map(option => (
            <button type="button" onClick={() => this.handleIncrement(option)}>
              {option}
            </button>
          ))}
        </Board>

        <Title>Statistics</Title>

        {total(good, neutral, bad) === 0 ? (
          <Notification>"There is no feedback"</Notification>
        ) : (
          <Info>
            <span>Good: {good}</span>
            <span>Neutral: {neutral}</span>
            <span>Bad: {bad}</span>
            <span>Total: {total(good, neutral, bad)}</span>
            <span>
              Positive feedback: {positive(total(good, neutral, bad), good)} %
            </span>
          </Info>
        )}
      </>
    );
  }
}
