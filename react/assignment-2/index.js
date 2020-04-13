/*global React*/
/*global ReactDOM*/
//import React from 'react';
const root = document.getElementById('root'),
startButton=document.getElementById('startButton'),
 stopButtonEvent = document.getElementById('stopButton'),
    carStatusEvent = document.getElementById('carStatus'),
    accelerateButtonEvent = document.getElementById('accelerateButton'),
    decelerateButtonEvent = document.getElementById('decelerateButton');


class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className:'start-button',
            status: 'Stopped', //Running
            speed:0,
        }
    }
    onStartOrStop=()=> {
        if(this.state.status==='Stopped'){
            this.setState(prevState =>({
                status:'Running',
                className:'stop-button',
            }));
        }
        else
        {
            this.setState(prevState=>({
                status:'Stopped',
                className:'start-button',
                speed:0
        }));
    }
    }
    onAccelerate=()=> {
      this.setState({
          speed:this.state.speed+10,
          status:`Running with Speed ${this.state.speed+10} kmph`
    })
}
    onApplyBrake=()=> {
        this.setState({
            speed:this.state.speed-10,
            status:`Running with Speed ${this.state.speed-10} kmph`
        })
    }
    displayStatusText=()=> {

    }
    
    render(){
        const startAndStopButton={
            backroundColor:'green',
             width: '80px',
             height: '45px',
            color:'white',
             fontSize:'15px',
            border:'2px solid white',
             borderRadius:'6px',
        };
      
        return <div>
       
   <div id = "carClass">
        <div>
        <button className={this.state.className}  style={startAndStopButton} onClick={this.onStartOrStop}    value='start'>
           {
           this.state.status==='Stopped'?'Start':'Stop'
           }
        </button>
      </div> 
      <div>
      <p id='carId' >`carId {this.props.carId}`</p>

      </div>
      <p id = "carStatus">Status:{this.state.status}</p>
    <div id = "accelerateAndDecelerte">
        <button onClick={this.onAccelerate} id="accelerateButton" disabled={this.state.status=='Stopped'} className="same-style">Accelerate</button> 
        <button onClick={this.onApplyBrake} id="decelerateButton" disabled={this.state.speed<10} className="same-style">Apply Break</button>
    </div>
 </div>
 </div>
}
}


class CarsList extends React.Component {
    constructor(props) {
        super(props);
        this.CarId=[1];
    }
    addCarToCarsList=()=> {
     const prevCarId=this.state.CarId
     const lengthOfCarIds=prevCarId.length-1;
     const lastCarId=
        this.setState({
            CarId:this.CarId.push(prevCarId),
            //carsIdList:this.state.carsIdList.push(this.state.carId++),
            });
    }
    removeCarFromCarsList=(event)=> {
       // console.log(event.target.value);
        const prevStateCarIds=this.sate.carIds.slice(0);
        const updatedCarIds=prevStateCarIds.filter(eachId=>{
            return eachId !== parseInt(event.target.id);
        })
    }
    
    renderCarsList=()=> {
        const carIds=this.state.carIds;
        return carIds.map(eachCarId=>{
            return <Car key={eachCarId} id={eachCarId} onRemoveCar={this.removeCarFromCarsList}/>;
        })
    }
    render(){
        return(
            <div>
            <button type='button' id='addCarButton' onClick={this.addCarToCarsList}>Add Car</button>
             <div className="">
            <Car/>
            </div>
            </div>
            )
        
    }
}
// ReactDOM.render(<Car/>,root)
   //     carId=''
  //  removeCarFromCarsList=''/>, root)
// <button onClick={this.onStartOrStop} id="stopButton" className="start-and-stop" value="stop">Stop</button>
ReactDOM.render(<CarsList />,root);

