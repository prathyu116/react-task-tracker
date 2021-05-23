import React from 'react'
import PropTypes from 'prop-types'

import './Header.css'
import Button from '../Button/Button'
const Header = ({Title,onAdd,showAdd}) => {
    
    return (
        <header className="header">
          <h1>  {Title}</h1>
          <Button  color={showAdd ? "red" : "green"} text={showAdd ? "close" : "Add"} onClick={onAdd}/>
         
        
         

        </header>
    )
}
Header.defaultProps ={
    Title :"Task Tracker"
}
Header.propTypes={
    Title:PropTypes.string.isRequired,
}
export default Header
