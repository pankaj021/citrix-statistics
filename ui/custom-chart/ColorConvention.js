import React from 'react';

export default function ColorConvention({stacks}) {
    return (
        <div className='color-convention'>
            {stacks.map((item, i) => (
                <div key={i} className='color-i'>
                    <span style={{backgroundColor: item.color}}></span>
                    {item.name}
                </div>))
            }
        </div>
    )
}