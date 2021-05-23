import PropTypes from 'prop-types'

import './Button.css'
const Button = ({color,text,onClick}) => {
   
    return (
        <div>
             <button onClick={onClick} style={{backgroundColor:color}} className="btn">
                 {text}
                
             </button>
            
        </div>
    )
}
Button.defaultProps ={
   color:"green",
   text:"Add"
}
Button.propTypes={
    color:PropTypes.string,
    text:PropTypes.string,
    onClick:PropTypes.func
}
export default Button
