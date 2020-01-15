import React from 'react';

export default function Box(props){
    return (
      <div style={{border: 'solid', color: 'white', backgroundColor: props.color, opacity: '0.7', width: '70px', height: '70px'}}></div>
    );
};
