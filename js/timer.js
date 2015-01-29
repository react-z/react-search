/** @jsx React.DOM */

var React = require('react');
var SecondsTohhmmss = require('./SecondsTohhmmss.jsx');

/**
 * Timer module
 * A simple timer component.
**/

var Timer = React.createClass({displayName: "Timer",
  getInitialState: function(){
     return {
       clock: 0,
       time: '',
       prefix: this.props.options.prefix,
     }
  },
  /**
   * Pause the timer.
  **/
  pause: function() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  },
  /** 
   * Play the timer.
  **/
  play: function() {
    if (!this.interval) {
      this.offset   = Date.now();
      this.interval = setInterval(this.update, this.props.options.delay); // 100 is delay
    }
  },
  /** 
   * Reset the timer.
  **/
  reset: function() {
    var clockReset = 0;
    this.setState({clock: clockReset });
    var time = SecondsTohhmmss(clockReset / 1000);
    this.setState({time: time });    
  },
  /** 
   * Increment the timer.
  **/
  update: function() {
    var clock = this.state.clock;
    clock += this.calculateOffset();
    this.setState({clock: clock });
    var time = SecondsTohhmmss(clock / 1000);
    this.setState({time: time });    
  },
  /** 
   * Calculate the offset time.
  **/
  calculateOffset: function() {
    var now = Date.now(),
        o   = now - this.offset;    
    this.offset = now;
    return o;
  },
  componentDidMount: function() {
    this.play();
  },
  componentWillUnmount: function() {
    this.pause();
  },  
  render: function(){
    return (

      React.createElement("div", {className: "react-timer"}, 

      React.createElement("h3", {className: "seconds"}, " ", this.state.time, " ", this.state.prefix), 

       React.createElement("br", null), 

       React.createElement("button", {onClick: this.reset, className: "pure-button button-secondary"}, "reset"), 
       React.createElement("button", {onClick: this.play, className: "pure-button button-secondary"}, "play"), 
       React.createElement("button", {onClick: this.pause, className: "pure-button button-secondary"}, "pause")
      )
    );
  }
});

module.exports = Timer;