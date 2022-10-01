import React from 'react';
import PropTypes from "prop-types";


export function Profile (props) {

    const {fullName, bio, profession } = props;

    const handleName = (e)=>
    {
        e.preventDefault();    
    
        alert ("Hello "+ props.fullName);
    
      }
    return (
        <>
        <h1>{props.fullName}</h1>
        <h2>{props.bio}</h2>
        <h3>{props.profession}</h3>
        <button onClick = {handleName}>OnClick</button>
        
        </>
    )

}

// Set default props
Profile.defaultProps = {
    fullName :"Jack Smith",
    bio :"B",
    profession:"Developer"
   };


// Check propsTypes 
   Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
    };



