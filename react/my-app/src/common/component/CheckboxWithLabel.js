import React from 'react'
// import './formcomponents.css'
class CheckboxWithLabel extends React.Component{
  render(){
        return(
            <div>
                <input type='checkbox' className='checkbox-style' value={this.props.label} onChange={this.props.handleCheckboxClick}/>
                <label>{this.props.label}</label>
         
            </div>
            )
    }
}
export {CheckboxWithLabel}