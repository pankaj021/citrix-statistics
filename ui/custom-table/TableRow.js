import React from 'react';

const TableCell = ({cell, className, sortData}) => (
    <div className={`t-cell ${className}`}>
        {cell}
    </div>
)

const TableCellHeader = ({cell, className, sortData}) => (
    <div 
        className={`t-cell ${className}`} 
        onClick={() => sortData(cell)}
    >
        {cell}
        <img src='/icons/sort.svg'/>
    </div>
)

export default function TableRow({className = "", row = [], isHeader, sortData}) {
    return (
        <div className={`row ${className}`}>
           {
                row.map((cell, i) => (
                    isHeader ? 
                    <TableCellHeader 
                        key={i} 
                        cell={cell} 
                        sortData={sortData} 
                        className={!i ? "first-cell" : ""}
                    /> :
                    <TableCell 
                        key={i} 
                        cell={cell} 
                        sortData={sortData} 
                        className={!i ? "first-cell" : ""}
                    />
                ))
           } 
        </div>
    )
}