/**
*
* NavMenu
*
*/

import React from 'react';
// import styled from 'styled-components';
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import MenuItem from 'material-ui/MenuItem'



function NavMenu(props) {
  return (
    <div>
      <IconMenu
        {...props}
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Log In" />
      </IconMenu>
    </div>
  );
}

NavMenu.propTypes = {

};

export default NavMenu;
