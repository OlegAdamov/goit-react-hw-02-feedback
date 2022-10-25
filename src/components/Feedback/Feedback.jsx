import React from 'react';
import { Board, Info, Title } from './Feedback.styled';

class Feedback extends React.Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
    initialTotalFeedback: 0,
    initialPercentageFeedback: 0,
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
    totalFeedback: this.props.initialTotalFeedback,
    percentageFeedback: this.props.initialPercentageFeedback,
  };

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
  //   countTotalFeedback = () => {
  //     this.setState({
  //       totalFeedback: this.state.good + this.state.neutral + this.state.bad,
  //     });
  //   };
  //   countPositiveFeedbackPercentage = () => {
  //     this.setState({
  //       percentageFeedback: Math.round(
  //         (this.state.good / this.state.totalFeedback) * 100
  //       ),
  //     });
  //   };

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
        <Info>
          <span>Good: {this.state.good}</span>
          <span>Neutral: {this.state.neutral}</span>
          <span>Bad: {this.state.bad}</span>
          <span>Total: {this.state.totalFeedback}</span>
          <span>Positive feedback: {this.state.percentageFeedback} %</span>
        </Info>
      </>
    );
  }
}

export default Feedback;
