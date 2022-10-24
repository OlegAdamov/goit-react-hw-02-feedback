import React from 'react';
import { Board, Info, Title } from './Feedback.styled';

class Feedback extends React.Component {
  static defaultProps = {
    initialValueGood: 0,
    initialValueNeutral: 0,
    initialValueBad: 0,
  };

  state = {
    valueGood: this.props.initialValueGood,
    valueNeutral: this.props.initialValueNeutral,
    valueBad: this.props.initialValueBad,
  };

  handleIncrementGood = () => {
    this.setState(prevState => {
      return { valueGood: prevState.valueGood + 1 };
    });
  };
  handleIncrementNeutral = () => {
    this.setState(prevState => {
      return { valueNeutral: prevState.valueNeutral + 1 };
    });
  };
  handleIncrementBad = () => {
    this.setState(prevState => {
      return { valueBad: prevState.valueBad + 1 };
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
        <Info>
          <span>Good: {this.state.valueGood}</span>
          <span>Neutral: {this.state.valueNeutral}</span>
          <span>Bad: {this.state.valueBad}</span>
        </Info>
      </>
    );
  }
}

export default Feedback;
