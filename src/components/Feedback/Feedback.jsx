import React from 'react';
import { Board, Info, Title, Notification } from './Feedback.styled';
import PropTypes from 'prop-types';
// import {
//   incrementGood,
//   incrementNeutral,
//   incrementBad,
// } from './HandleIncrement';

export default class Feedback extends React.Component {
  static propTypess = {
    initialGood: PropTypes.number.isRequired,
    initialNeutral: PropTypes.number.isRequired,
    initialBad: PropTypes.number.isRequired,
    initialTotalFeedback: PropTypes.number.isRequired,
    initialPercentageFeedback: PropTypes.number.isRequired,
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
    totalFeedback: this.props.initialTotalFeedback,
    percentageFeedback: this.props.initialPercentageFeedback,
  };

  //   handleIncrementGood = { incrementGood };
  //   handleIncrementNeutral = { incrementNeutral };
  //   handleIncrementBad = { incrementBad };
  handleIncrementGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
        totalFeedback: prevState.totalFeedback + 1,
        percentageFeedback: Math.round(
          ((this.state.good + 1) / (prevState.totalFeedback + 1)) * 100
        ),
      };
    });
  };
  handleIncrementNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
        totalFeedback: prevState.totalFeedback + 1,

        percentageFeedback: Math.round(
          (this.state.good / (prevState.totalFeedback + 1)) * 100
        ),
      };
    });
  };
  handleIncrementBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
        totalFeedback: prevState.totalFeedback + 1,
        percentageFeedback: Math.round(
          (this.state.good / (prevState.totalFeedback + 1)) * 100
        ),
      };
    });
  };

  render() {
    return (
      <>
        <Title>Please leave feedback</Title>
        <Board>
          <button type="button" onClick={this.handleIncrementGood}>
            Good
          </button>
          <button type="button" onClick={this.handleIncrementNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleIncrementBad}>
            Bad
          </button>
        </Board>

        <Title>Statistics</Title>

        {this.state.totalFeedback === 0 ? (
          <Notification>"There is no feedback"</Notification>
        ) : (
          <Info>
            <span>Good: {this.state.good}</span>
            <span>Neutral: {this.state.neutral}</span>
            <span>Bad: {this.state.bad}</span>
            <span>Total: {this.state.totalFeedback}</span>
            <span>Positive feedback: {this.state.percentageFeedback} %</span>
          </Info>
        )}
      </>
    );
  }
}
