import React from 'react'
import './Table.css'

const Table = () => {
  return (
    <table>
        <tr>
            <th className="process-header">Process</th>
            <th className="chemical-header">La</th>
            <th className="chemical-header">Ce</th>
            <th className="chemical-header">Pr</th>
            <th className="chemical-header">Nd</th>
            <th className="chemical-header">Pm</th>
            <th className="chemical-header">Sm</th>
            <th className="chemical-header">Eu</th>
            <th className="chemical-header">Gd</th>
            <th className="chemical-header">Tb</th>
            <th className="chemical-header">Dy</th>
            <th className="chemical-header">Ho</th>
            <th className="chemical-header">Er</th>
            <th className="chemical-header">Tm</th>
            <th className="chemical-header">Yb</th>
            <th className="chemical-header">Lu</th>
            <th className="chemical-header">Y</th>
            <th className="chemical-header">Sc</th>
        </tr>
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
    </table> 
  )
}

export default Table