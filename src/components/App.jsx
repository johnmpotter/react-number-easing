import React from 'react'; // eslint-disable-line
import NumberEasing from './NumberEasing'; // eslint-disable-line

function getRandomInteger() {
  return Math.floor(Math.random() * 1000);
}

export default class App extends React.Component {
  state = {
    value: 0,
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>React Number Easing</h1>
        <NumberEasing value={this.state.value} speed={1000} ease="quintInOut" />
      </div>
    );
  }

  componentDidMount() {
    this.setState({ value: getRandomInteger() });

    setInterval(() => {
      this.setState({
        value: getRandomInteger(),
      });
    }, 3000);
  }
}
