import React from 'react';

function NewlineText(props) {
    const text = props.text;
    if(!text) return;
    return text.split('\n').map((str, index) => <p key={index}>{str}</p>);
}

export default NewlineText;
