import React from "react";
import './Button.css'

const Buttons = props => <button 
onClick={e=> props.click && props.click(props.value)}
className={`button ${props.double ? 'double' : ''} ${props.operation ? 'operation' : ''}`}>{props.value}
</button>
export default Buttons