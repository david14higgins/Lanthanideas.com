import React from 'react'
import "./BackgroundLogo.css"

const BackgroundLogo = (props) => {
  return (
    <div className={`${props.position} background-logo`}>
        <svg viewBox="0 0 469 544" xmlns="http://www.w3.org/2000/svg">
                <path d="M303.5 42L232.5 1L162 42L232.5 83V165L303.5 123.5V42Z"/>
                <path d="M468.5 136L397.5 95L327 136L397.5 177V259L468.5 217.5V136Z"/>
                <path d="M303.5 231L232.5 190L162 231L232.5 272V354L303.5 312.5V231Z"/>
                <path d="M142.5 326L71.5 285L1 326L71.5 367V449L142.5 407.5V326Z"/>
                <path d="M468.5 326L397.5 285L327 326L397.5 367V449L468.5 407.5V326Z"/>
                <path d="M303.5 420L232.5 379L162 420L232.5 461V543L303.5 501.5V420Z"/>
                <path d="M142.5 136L71.5 95L1 136L71.5 177V259L142.5 217.5V136Z"/>
            </svg>
    </div>
  )
}

export default BackgroundLogo