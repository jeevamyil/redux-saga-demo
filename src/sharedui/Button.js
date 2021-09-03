import React from 'react';

const Button=(props)=>{
    return(
        <button className={props.className} onClick={props.customEvent}>
            {props.name}
        </button>
    )
}
export default Button;