import React from 'react';
import ColumnBar from './ColumnBar';
import { getStack, getMaxOccurance } from './utils';
import './Chart.css';
import ColorConvention from './ColorConvention';

const ColumnBarList = ({data, stacks, maxSize}) => (
    data.map((column, i) => (
        <ColumnBar 
            key={i} 
            stacks={getStack(stacks, column, maxSize)}
            timestamp={column.dateTime}
        />
    ))
)

export default function CustomChart({stacks, data, chartTitle, yTitle}) {
    const maxSize = getMaxOccurance(data, stacks);
    return (
        <div className="chart">
            <h4 className='chart-head'>{chartTitle || "Chart Title"}</h4>
            <h6 className='y-head'>{yTitle || "No of occurances"}</h6>
            <div className='chart-content'>
                <div className='y-axis'>
                    <div className='y-axis-i'>{Math.floor(maxSize)}</div>
                    <div className='y-axis-i'>{Math.floor(maxSize * 3 / 4 )}</div>
                    <div className='y-axis-i'>{Math.floor(maxSize / 2)}</div>
                    <div className='y-axis-i'>{Math.floor(maxSize / 4)}</div>
                </div>
                <div className='custom-chart'>
                    <ColumnBarList data={data} stacks={stacks} maxSize={maxSize}/>
                </div>
                <ColorConvention stacks={stacks}/>
            </div>
        </div>
    )
}