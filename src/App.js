import React from 'react';
import './App.css';

import StepBar from './components/StepBar';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentStep: null,
      allSteps: [
        { label: "account", isCompleted: true },
        { label: "security", isCompleted: true },
        { label: "review", isCompleted: true }
      ]
    }
  }

  render () {
    return (
      <div className="App">
        <StepBar currentStep={this.state.currentStep} allSteps={this.state.allSteps} />
      </div>
    );
  }
}

export default App;
