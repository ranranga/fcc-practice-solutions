// reference: FCC React Pomodoro Clock
class TimerLengthControls extends React.Component {
  render() {
    return (
      <div className="length-controls">
        <div id={this.props.titleID}>
          {this.props.title}
        </div>
        <button id={this.props.decrID}
          className="btn-level" value="-"
          onClick={this.props.onClick}>
          <i className="fa fa-arrow-down"/>
        </button>
        <button id={this.props.incrID}
          className="btn-level" value="+"
          onClick={this.props.onClick}>
          <i className="fa fa-arrow-up"/>
        </button>
        <div id={this.props.lengthID}>{this.props.length}</div>
      </div>
    )
  }
};

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerState: 'stopped',
      timerType: 'Session',
      timer: 1500,
      intervalID: '',
      alarmColor: {color: 'white'}
    }
    this.timerControl = this.timerControl.bind(this);
    this.setBreakLength = this.setBreakLength.bind(this);
    this.setSessionLength = this.setSessionLength.bind(this);
    this.clockify = this.clockify.bind(this);
    this.reset = this.reset.bind(this);
    this.lengthControl = this.lengthControl.bind(this);
    
    this.beginCountDown = this.beginCountDown.bind(this);
    this.decrementTimer = this.decrementTimer.bind(this);
    this.phaseControl = this.phaseControl.bind(this);
    this.warning = this.warning.bind(this);
    this.buzzer = this.buzzer.bind(this);
    this.switchTimer = this.switchTimer.bind(this);
 }
  
  // main methods
  setBreakLength(e) {
    this.lengthControl('breakLength', e.currentTarget.value, this.state.breakLength, 'Session');
  }
  setSessionLength(e) {
    this.lengthControl('sessionLength', e.currentTarget.value, this.state.sessionLength, 'Session');
  }
  clockify() {
    let minutes = Math.floor(this.state.timer / 60);
    let seconds = this.state.timer - minutes * 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return minutes + ':' + seconds;
  }
  timerControl() {
    let control = this.state.timerState == 'stopped' ? (
      this.beginCountDown(),
      this.setState({timerState: 'running'})
    ) : (
      this.setState({timerState: 'stopped'}),
      this.state.intervalID && this.state.intervalID.cancel()
    );
  }
  reset() {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timerState: 'stopped',
      timerType: 'Session',
      timer: 1500,
      intervalID: '',
      alarmColor: {color: 'white'}
    });
    this.state.intervalID && this.state.intervalID.cancel();
    this.audioBeep.pause();
    this.audioBeep.currentTime = 0;
  }
  
  // util methods
  lengthControl(stateToChange, sign, currentLength, timerType) {
    if (this.state.timerState == 'running') return;
    if (this.state.timerType == timerType) {
      if (sign == "-" && currentLength != 1) {
        if (sign == "-" && currentLength != 1 ) {
          this.setState({[stateToChange]: currentLength - 1});
        } else if (sign == "+" && currentLength != 60) {
          this.setState({[stateToChange]: currentLength + 1});
        }
      } else {
        if (sign == "-" && currentLength != 1 ) {
          this.setState({[stateToChange]: currentLength - 1,
          timer: currentLength * 60 - 60});
        } else if (sign == "+" && currentLength != 60) {
          this.setState({[stateToChange]: currentLength + 1,
          timer: currentLength * 60 + 60});
        }
      }
    }
  }
  beginCountDown() {
    this.setState({
      intervalID: accurateInterval(() => {
        this.decrementTimer(); 
        this.phaseControl();
       }, 1000)
    })
  } 
  decrementTimer() {
    this.setState({timer: this.state.timer - 1});
  }
  phaseControl() {
    let timer = this.state.timer;
    this.warning(timer);
    this.buzzer(timer);
    if (timer < 0) { 
      this.state.timerType == 'Session' ? (
        this.state.intervalID && this.state.intervalID.cancel(),
        this.beginCountDown(),
        this.switchTimer(this.state.breakLength * 60, 'Break')
      ) : (
        this.state.intervalID && this.state.intervalID.cancel(),
        this.beginCountDown(),
        this.switchTimer(this.state.sessionLength * 60, 'Session')
      );
    }  
  }
  warning(_timer) {
    let warn = _timer < 61 ? 
    this.setState({alarmColor: {color: '#a50d0d'}}) : 
    this.setState({alarmColor: {color: 'white'}});
  }
  buzzer(_timer) {
    if (_timer === 0) {
      this.audioBeep.play();
    }
  }
  switchTimer(num, str) {
    this.setState({
      timer: num,
      timerType: str,
      alarmColor: {color: 'white'}
    })
  }
  
  
  render() {
    return(
      <div>
        <div id="main-title">Pomodoro</div>
      
        <div className="timer-length-controls">
          <TimerLengthControls
            titleID="session-label" title="Session Length"
            decrID="session-decrement" incrID="session-increment"
            lengthID="session-length" length={this.state.sessionLength}
            onClick={this.setSessionLength}/>
          <TimerLengthControls
            titleID="break-label" title="Break Length"
            decrID="break-decrement" incrID="break-increment"
            lengthID="break-length" length={this.state.breakLength}
            onClick={this.setBreakLength}/>
        </div>
        <div className="timer">
          <div className="timer-wrapper">
            <div id="timer-label">
              {this.state.timerType}
            </div>
            <div id="time-left">
              {this.clockify()}
            </div>
            <div className="timer-control">
              <button id="start_stop" onClick={this.timerControl}>
                <i className="fa fa-play"/>
                <i className="fa fa-pause"/>
              </button>
              <button id="reset" onClick={this.reset}>
                <i className="fa fa-refresh"/>
              </button>
            </div>
          </div>
        </div>
      <audio id="beep" preload="auto" 
          src="http://soundbible.com/grab.php?id=535&type=wav"
          ref={(audio) => { this.audioBeep = audio; }} />
    </div>
    )
  }
}

ReactDOM.render(<Timer/>, document.getElementById('app'));