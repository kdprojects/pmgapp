/**
*
* LoginButton
*
*/

import React from 'react';
// import styled from 'styled-components';
import PersonIcon from 'material-ui/svg-icons/social/person'
import FlatButton from 'material-ui/FlatButton'

function LoginButton({onTouchTap}) {
  return (
    <div>
      <FlatButton
        label="Login"
        onTouchTap={onTouchTap}
        icon={<PersonIcon />}
      />
    </div>
  );
}

LoginButton.propTypes = {

};

export default LoginButton;
