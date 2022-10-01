import React from 'react';

export function Image (props) {

    return (
        <div>
        
        <img height= "150" width="150" src = {props.children} style={{filter: 'grayscale(100%)'}} ></img>
        
        
        </div>
    )



}