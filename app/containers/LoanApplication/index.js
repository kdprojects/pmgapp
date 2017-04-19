/*
 *
 * LoanApplication
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectLoanApplication from './selectors';

import { Grid, Row, Col } from 'react-flexbox-grid'

import NavBar from '../../components/NavBar'
import LoanStepper from '../../components/LoanStepper'
import FormJumbotron from '../../components/FormJumbotron'

import { login } from './actions'
import {auth} from '../../auth'

export class LoanApplication extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props)
    
    this.handleLoginTouchTap = this.handleLoginTouchTap.bind(this)
    this.handleTitleTouchTap = this.handleTitleTouchTap.bind(this)
  }
  
  handleLoginTouchTap = () => {
    //Login using Auth0 Lock widget
    login()
    auth.login()
  }
  handleTitleTouchTap = () => {
    console.log('Clicked')
    alert('Clicked!')
  }

  render() {
    return (
      <div>
        <Helmet
          title="PMG Jamaica Loan Application"
          meta={[
            { name: 'description', content: 'Apply today with our easy Loan Application System' },
          ]}
        />
        <NavBar handleLoginTouchTap={this.handleLoginTouchTap} handleTitleTouchTap={this.handleTitleTouchTap} />
        <Grid fluid>
          <Row>
            <Col xs={12} md={8} mdOffset={2}>
              <Row>
                <Col xs>
                  <LoanStepper stepIndex={this.props.LoanApplication.stepIndex} />
                </Col>
              </Row>
              <Row>
                <Col xsOffset={1} xs={10}>
                  <FormJumbotron stepIndex={this.props.LoanApplication.stepIndex} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

LoanApplication.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  LoanApplication: makeSelectLoanApplication(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoanApplication);
