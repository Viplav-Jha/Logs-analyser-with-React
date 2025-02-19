import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import HelpIcon from '@material-ui/icons/Help';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import {  Avatar, IconButton } from '@material-ui/core';
import Time from './Time'

function Header() {
    return (
        <div className="header">
         
          <div className="header__left">
          <IconButton>
                  <MenuIcon />   
                </IconButton>
           <img src="data:image/png;base64,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"
            alt=""  />

          </div>
         <div className="header__Right">
          <Time />
         <Avatar />

         <IconButton>
             <HelpIcon />   
         </IconButton>
       
         <IconButton>
             <FullscreenExitIcon />   
         </IconButton>

         </div>
            
        </div>
    );
}

export default Header;



