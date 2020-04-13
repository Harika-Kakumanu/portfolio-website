import React from 'react'
import './countrystyle.css'
import { FiMoon } from "react-icons/fi";
class Header extends React.Component{

    render(){
        return(
            <div className='header-div'>
            <h3>Where in the world?</h3>
            <h3 className='theme-mode' onClick={this.props.onChangeTheme}><FiMoon/>{this.props.selectedTheme} Mode</h3>
            </div>
            )
    }
}
export{Header}