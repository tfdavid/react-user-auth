import React from 'react';

export function renderInput(props){
    return (
        <div className="input-field">
            <input {...props.input} type={props.type ? props.type : "text"} placeholder={props.placeholder} />
            <p className="red-text">{props.meta.touched && props.meta.error}</p>
        </div>
    )
}