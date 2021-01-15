import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import SearchIcon from '@material-ui/icons/Search';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ErrorIcon from '@material-ui/icons/Error';
import SettingsIcon from '@material-ui/icons/Settings';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { IconButton } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Sidebar() {
    return (
       

        <div className="sidebar">
      
        <div className="sidebar__container">
          <div className="sidebar__contTop">    
         
         <SidebarOption
          Icon={SearchIcon}
          title="Search"/> 
        
        <SidebarOption
          Icon={EqualizerIcon}
          title="Chart"/>
         <SidebarOption
          Icon={DashboardIcon}
          title="Dashboard"/>
         </div>  

         <div className="sidebar_contMiddle">   
         <SidebarOption
          Icon={AssessmentIcon}
          title="Report"/>
         
         <SidebarOption
          Icon={ErrorIcon}
          title="Alert"/>

         <SidebarOption
          Icon={SettingsIcon}
          title="Setting"/>
         </div>


         <div className="sidebar__contFooter">   
         <SidebarOption
          Icon={LiveTvIcon}
          title="Monitoring"/>
         <SidebarOption
          Icon={SupervisorAccountIcon}
          title="Admin"/>
          <SidebarOption
          Icon={ExitToAppIcon}
          title="Logout"/>
         </div>
          </div>
            
        </div>
    );
}

export default Sidebar;