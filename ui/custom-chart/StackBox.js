import React from 'react';

export default function StackBox({name, color, width, height}) {
    const style = {
        height: `${height}%`,
        width: (width || '1rem'),
        backgroundColor: (color || "blue")
    }
    return (
        <div  className='stack-box' style={style}></div>
    )
}