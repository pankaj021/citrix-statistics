import React from 'react';
import StackBox from './StackBox';
import { getDate } from './utils';

export default function ColumnBar({stacks, timestamp}) {
    return (
        <div>
            <div className='column-bar'>
                {
                    stacks.map((stack, i) => <StackBox key={i} height={i + 1} {...stack}/>)
                }
            </div>
            <div className='date'>{getDate(timestamp)}</div>
        </div>
    )
}