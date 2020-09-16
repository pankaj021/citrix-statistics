import React from 'react';
import CustomChart from './custom-chart';
import data from './data.json';
import CustomTable from './custom-table';

const stacks = [
    {name: "Data Exfiltration", width: '1rem', color: "#dce4f5",},
    {name: "Insider Threat", width: '1rem', color: "#1d456f",},
    {name: "Compromised Users", width: '1rem', color: "#2376c2",},
    {name: "Compromised Endpoints", width: '1rem', color: "#5ba2f5",},
]

export default function App() {
    return (
        <div>
            <a className='github' href="https://github.com/pankaj021/citrix-chart" target = "_blank">Github link</a>
            <CustomChart 
                data={data.defaultReport.items}
                stacks={stacks}
                chartTitle="Timeline Details"
                yTitle="No of occurances"
            />
            <CustomTable 
                data={data.defaultReport.aggregated.items}
                tableTitle="Risk Category Summary"
            />
        </div>
    )
}