/**
*
* NavIcon
*
*/

import React from 'react';
// import styled from 'styled-components';
import logo from './favicon.png'
import Avatar from 'material-ui/Avatar'


function NavBrand() {
  return (
    <div>
      <Avatar src={logo} />
      PMG Jamaica
    </div>
  );
}

NavBrand.propTypes = {

};

export default NavBrand;
