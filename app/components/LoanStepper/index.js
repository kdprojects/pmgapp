/**
*
* LoanStepper
*
*/

import React from 'react';
// import styled from 'styled-components';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper'

function LoanSlider({stepIndex}) {
  return (
    <Stepper activeStep={stepIndex} >
      <Step>
        <StepLabel>Personal Info</StepLabel>
      </Step>
      <Step>
        <StepLabel>Employment Info</StepLabel>
      </Step>
      <Step>
        <StepLabel>Financial Info</StepLabel>
      </Step>
      <Step>
        <StepLabel>Loan Application</StepLabel>
      </Step>
       <Step>
        <StepLabel>Upload Documents</StepLabel>
      </Step>
       <Step>
        <StepLabel>Done!</StepLabel>
      </Step>
    </Stepper>
  );
}

LoanSlider.propTypes = {

};

export default LoanSlider;
