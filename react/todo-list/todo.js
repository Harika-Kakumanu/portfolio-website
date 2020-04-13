/*global React*/
/* global ReactDOM*/

// class Todo extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//     }
// }
// }

class Input extends React.Component{
    constructor(props){
        super(props)
        this.state={
            inputId:[1],
            userInput:'',
            
        }
        
    }
    enteringInput=(event)=>{
        this.setState({
            userInput:event.target.value,
            })
      return this.state.userInput;
    }
    render(){
        return(
            <div className="outer-div">
            <input type="text" className="input-class" placeholder="What do you want to enter?" onChange={this.enteringInput}/>
           
            </div>
            )
    }
}

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            checkedState:" ",
        }
    }
    render(){
       // console.log(`${<Input userInput={this.props.}/>}`);
        return (
            <div>
            <input type="checkbox" value={<Input userInput={this.props.userInput}/>}/>
            <button >X</button>
            </div>
            )
    }
}

ReactDOM.render(<Todo/>,document.getElementById('root'));