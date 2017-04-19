/**
*
* TextInput
*
*/

import React from 'react';
// import styled from 'styled-components';
import TextField from 'material-ui/TextField'


function TextInput(props) {
  const {helptext, label, error} = props
  return (
    <div>
    <TextField
      hintText={helptext}
      floatingtLabelText={label}
      errorText={error ? error.text : undefined}
    />
  </div>
  );
}

TextInput.propTypes = {

};

export default TextInput;
