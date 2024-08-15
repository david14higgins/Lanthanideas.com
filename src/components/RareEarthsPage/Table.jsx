import React from 'react'
import './Table.css'

const Table = () => {
  return (
    <table>
        <thead>
            <tr>
                <th className="process-header">Process</th>
                <th>La</th>
                <th>Ce</th>
                <th>Pr</th>
                <th>Nd</th>
                <th>Pm</th>
                <th>Sm</th>
                <th>Eu</th>
                <th>Gd</th>
                <th>Tb</th>
                <th>Dy</th>
                <th>Ho</th>
                <th>Er</th>
                <th>Tm</th>
                <th>Yb</th>
                <th>Lu</th>
                <th>Y</th>
                <th>Sc</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="process-name">Molten Salt Electrolysis - metal</td><td className="green-cell"></td>
                <td className="green-cell"></td><td className="green-cell"></td><td className="green-cell"></td><td></td>
                <td></td><td></td><td></td><td></td>
                <td></td><td></td><td></td><td></td>
                <td></td><td></td><td></td><td></td>   
            </tr>
            <tr>
                <td className="process-name">Molten Salt Electrolysis - RE - Fe Master Alloy</td><td></td>
                <td></td><td></td><td></td><td></td>
                <td></td><td></td><td className="green-cell"></td><td className="green-cell"></td>
                <td className="green-cell"></td><td className="green-cell"></td><td></td><td></td>
                <td></td><td></td><td className="green-cell"></td><td></td>   
            </tr>
            <tr>
                <td className="process-name">Vacuum Reduction ( + Remelting)</td><td></td>
                <td></td><td></td><td></td><td></td>
                <td></td><td></td><td className="green-cell"></td><td className="green-cell"></td>
                <td className="green-cell"></td><td className="green-cell"></td><td className="green-cell"></td><td></td>
                <td></td><td className="green-cell"></td><td className="green-cell"></td><td className="green-cell"></td>   
            </tr>
            <tr>
                <td className="process-name">Direct Sublimination</td><td></td>
                <td></td><td></td><td></td><td></td>
                <td className="green-cell"></td><td className="green-cell"></td><td></td><td></td>
                <td></td><td></td><td></td><td className="green-cell"></td>
                <td className="green-cell"></td><td></td><td></td><td></td>   
            </tr>
        </tbody>
    </table> 
  )
}

export default Table