import React, { useState } from 'react';
import './Time.css'

const Time = () => {
    
    const newDate = new Date().toLocaleDateString('en-GB', {
        month: '2-digit',day: '2-digit',year: 'numeric'})
    const newTime= new Date().toLocaleTimeString();

    const [cdate , setCdate] =useState(newDate);
    return (
        <div className="time">
           <p>{cdate}</p>
            <p>  {newTime} </p>
        </div>
    );
} ;

export default Time;