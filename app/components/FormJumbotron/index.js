/**
*
* FormJumbotron
*
*/

import React from 'react';
// import styled from 'styled-components';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import LeftArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import RightArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right'


function FormJumbotron({title, subtitle, avatar, form, handleNext, handleBack}) {
  return (
    <div>
      <Card >
        <CardHeader
          title={title}
          subtitle={subtitle}
          avatar={avatar}
        />
        <CardText>
          {form}
        </CardText>
        <CardActions>
          <FlatButton
            label="Back"
            icon={<LeftArrow />}
          />
          <FlatButton
            label="Next"
            labelPosition='before'
            icon={<RightArrow />}
          />
        </CardActions>
      </Card>
    </div>
  );
}

FormJumbotron.propTypes = {

};

export default FormJumbotron;
