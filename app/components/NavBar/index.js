/**
*
* NavBar
*
*/

import React from 'react';
// import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import NavBrand from '../NavBrand'
import NavMenu from '../NavMenu'
import LoginButton from '../LoginButton'


function NavBar({handleTitleTouchTap, checkLogin, handleLoginTouchTap}) {
  return (
    <div>
      <AppBar
        title={<NavBrand/>}
        onTitleTouchTap={handleTitleTouchTap}
        iconElementLeft={<NavMenu/>}
        iconElementRight={<LoginButton onTouchTap={handleLoginTouchTap} />}
      />
    </div>
  );
}

NavBar.propTypes = {

};

export default NavBar;
