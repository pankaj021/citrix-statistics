import React, {useState} from 'react';
import TableRow from './TableRow';
import TableBody from './TableBody';
import './CustomTable.css';

export default function CustomTable({data, tableTitle}) {
    const [tableData, setData] = useState(data);
    const headers = Object.keys(data[0]);
    const sortData = (column) => {
        function compare(a, b) {
            let valA = a[column];
            let valB = b[column];
            if(a[column] instanceof String){
                valA = a[column].toUpperCase();
                valB = a[column].toUpperCase();
            }
            let comparison = 0;
            if (valA > valB) {
                comparison = 1;
            } else if (valA < valB) {
                comparison = -1;
            }
            return comparison;
        }
        const sorted = data.sort(compare);
        setData([...sorted]);
    }

    return(
        <div className='custom-table'>
            <h4>{tableTitle || "Title"}</h4>
            <div className='custom-table-content'>
                <TableRow className='th-row' row={headers} sortData={sortData} isHeader={true}/>
                <TableBody data={tableData}/>                
            </div>
        </div>
    )
}