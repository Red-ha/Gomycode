import React from 'react';

export function Profile (props) {

const {person} = props;
    
    return (
    
    <div align='center'>
      <img height= "150" width="150" src = {props.person.imgSrc} style={{filter: 'grayscale(100%)'}} ></img>
      <h1>{props.person.fullName}</h1>
      <h2>{props.person.bio}</h2>
      <h3>{props.person.profession}</h3>
    </div> 
    )

}