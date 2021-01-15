import React from 'react';
import './SidebarOption.css'

function SidebarOption({Icon,title,Selected}) {


    return (
        <div className={`sidebarOption ${Selected && "sidebarOption--active"} ` }>
           < Icon />
           <p>{title}</p> 
        </div>
    );
}

export default SidebarOption;