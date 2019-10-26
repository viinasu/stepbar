import React from 'react';
import './StepBar.css';

export default class StepBar extends React.Component {
  render () {
    return (
      <div className='stepBar'>
        { this.props.allSteps.map((step, index) => (
          <div
            key={`stepBar-${step.label}`}
            className={`stepBar-statusIndicator ${this.props.currentStep === index ? "stepBar-statusIndicator--current" : ""}`}>
              <div className="stepBar-statusIndicator-label">{step.label}</div>
              <div className="stepBar-statusIndicator-barAndStatusWrapper">
                {/*first bar is hidden*/}
                <div className={`stepBar-statusIndicator-bar stepBar-statusIndicator-bar--pre ${index === 0 ? 'stepBar-statusIndicator-bar--hidden' : ''}`}></div>

                <div className="stepBar-statusIndicator-status">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/Checkmark_Symbol.svg" alt="checkmark"/>
                </div>

                {/*last bar is hidden*/}
                <div className={`stepBar-statusIndicator-bar stepBar-statusIndicator-bar--post ${index === this.props.allSteps.length-1 ? 'stepBar-statusIndicator-bar--hidden' : ''}`}></div>
              </div>
          </div>
        )) }
      </div>
    )
  }
}