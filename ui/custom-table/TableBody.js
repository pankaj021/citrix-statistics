import React from 'react';
import TableRow from './TableRow';

export default function TableBody({data}) {
    return (
        <div className='t-body'>
           {
               data.map((row, i) => <TableRow key={i} row={Object.values(row)} className="t-row"/>)
           } 
        </div>
    )
}