import { Component } from 'react';
import ServiceEvaluation from './ServiceEvaluation/ServiceEvaluation';
import Statistics from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 5,
    bad: 0,
  };

  handleClick = value => {
    if (value === 'good') {
      this.setState(prevState => ({ good: prevState.good + 1 }));
      return;
    } else if (value === 'neutral') {
      this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
      return;
    } else {
      this.setState(prevState => ({ bad: prevState.bad + 1 }));
    }
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    let total = 0;
    for (const value of values) {
      total += value;
    }
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let countPositiveFeedback = (this.state.good * 100) / this.countTotalFeedback();
    return Math.round(countPositiveFeedback) + "%";
  }

  render() {
    return (
      <div>
        <ServiceEvaluation handleClick={this.handleClick} />
        <Statistics
          state={this.state}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
