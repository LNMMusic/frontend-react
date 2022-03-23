// LIBS
import React from 'react'
import './DataPlate.css'


const DataPlate = ({data}) => {
    const keys = Object.keys(data)
    
    return (
        <div className="dataPlate">
            <table>
                <thead>
                    {keys.map((key, ix) => <th key={ix}>{key}</th>)}
                </thead>
                <tbody>
                    <tr>
                        {keys.map((key, ix) => <td key={ix}>{data[key]}</td>)}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DataPlate