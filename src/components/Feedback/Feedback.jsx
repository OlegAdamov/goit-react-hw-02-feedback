import React from 'react';

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
      <div className="Feedback">
        <h1 className="Feedback__leave">Please leave feedback</h1>
        <button type="button" onClick={this.handleIncrementGood}>
          Good
        </button>
        <button type="button" onClick={this.handleIncrementNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleIncrementBad}>
          Bad
        </button>

        <h2 className="Feedback__stat">Statistics</h2>
        <span className="Feedback__value">Good: {this.state.valueGood}</span>
        <span className="Feedback__value">
          Netural: {this.state.valueNeutral}
        </span>
        <span className="Feedback__value">Bad: {this.state.valueBad}</span>
      </div>
    );
  }
}

export default Feedback;
