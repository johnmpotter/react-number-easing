/*
  From
  https://github.com/javierbyte/react-number-easing
  Refactored to use React class.
*/

import React from 'react';
import PropTypes from 'prop-types';
import eases from 'eases';

export default class NumberEasing extends React.Component {

  static propTypes = {
    value: PropTypes.any.isRequired,
    speed: PropTypes.number,
    ease: PropTypes.oneOf(Object.keys(eases)),
    useLocaleString: PropTypes.bool,
    delayValue: PropTypes.number,
  };

  static defaultProps = {
    speed: 500,
    ease: 'quintInOut',
    useLocaleString: false,
  };

  constructor(props) {
    super(props);

    this.timeout = null;
    this.startAnimationTime = null;
    let value = parseInt(props.value, 10);
    this.state = {
      previousValue: value,
      displayValue: value,
    };
  }

  componentWillReceiveProps(nextProps) {
    let value = parseInt(this.props.value, 10);

    if (parseInt(nextProps.value, 10) === value) {
      return;
    }

    this.setState({
      previousValue: this.state.displayValue,
    });

    if (!isNaN(parseInt(this.props.delayValue, 10))) {
      this.delayTimeout = setTimeout(() => {
        this.startAnimationTime = new Date().getTime();
        this.updateNumber();
      }, this.props.delayValue);
    } else {
      this.startAnimationTime = new Date().getTime();
      this.updateNumber();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.displayValue !== this.state.displayValue;
  }

  updateNumber = () => {
    let value = parseInt(this.props.value, 10);

    let now = new Date().getTime();
    let elapsedTime = Math.min(this.props.speed, now - this.startAnimationTime);
    let progress = eases[this.props.ease](elapsedTime / this.props.speed);

    let currentDisplayValue = Math.round(
      (value - this.state.previousValue) * progress + this.state.previousValue
    );

    this.setState({
      displayValue: currentDisplayValue,
    });

    if (elapsedTime < this.props.speed) {
      this.timeout = setTimeout(this.updateNumber, 16);
    } else {
      this.setState({
        previousValue: value,
      });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
    clearTimeout(this.delayTimeout);
  }

  render() {

    let { className, useLocaleString, ...other } = this.props;
    let { displayValue } = this.state;

    let classes = 'react-number-easing';
    if (className) {
      classes += ' ' + className;
    }

    return (
      <span {...other} className={classes}>
        {useLocaleString ? displayValue.toLocaleString() : displayValue}
      </span>
    );
  }
}
