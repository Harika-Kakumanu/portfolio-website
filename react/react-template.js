 /*global ReactDOM*/


 const divRootId = document.getElementById('root');


 // function Clock(props) {
 //  return <div>
 // <h2>Hello World!</h2>
 // <h2>It is{props.date.toLocaleTimeString()}</h2>
 // </div>
 // }

 // class Clock extends React.Component {
 // constructor(harika){
 //  super(harika);
 // }
 //  render() {
 //   return (<div>
 //  <h2>Hello World!</h2>
 //  <h2>It is{this.props.date.toLocaleTimeString()}</h2>
 //  </div>);
 //  }
 // }

 // function tick() {
 //  ReactDOM.render(
 //   <Clock date={new Date()}/>, divRootId
 //  )
 // }

 // setInterval(tick, 1000);


 // function Welcome(props) {
 //     return <h1>hello,{props.name}</h1>;
 // }

 // const element = (<Welcome name='Harika'/>);

 // ReactDOM.render(element, divRootId);



 // function inserting(user) {

 //     return user.firstName + ' ' + user.lastName;
 // }

 // function greeting(user) {
 //     if (user) {
 //         return <h1>Hello,{inserting(user)}</h1>;
 //     }
 //     else {
 //         return <h1>Hi,Stranger</h1>;
 //     }
 // }


 // const user = {
 //     firstName: 'Harika',
 //     lastName: 'Honey',
 // }

 // const element = (<h1>hello,{greeting(user)}</h1>);

 // ReactDOM.render(element, divRootId);



 //const rootElement = document.getElementById("root");
 //const name = "Harika"
 //const element = <h2>Hello {2+2}</h2>;
 //const element = <h2>Hello {name}</h2>;
 //let e = <img src="../static/phoneimg.png "/>;
 // const element =
 //       <div className="userName"  style={{color:'red',fontSize:'50px'}}>
 // <p>Hello {name}</p>
 // <img src="../static/phoneimg.png "/>
 // </div>;

 //ReactDOM.render(e, rootElement);
 //ceactDOM.render(element, rootElement);


 // class Toggle extends React.Component {
 //  constructor(props) {
 //   super(props);
 //   this.state = { isToggleOn: false };

 //   // This binding is necessary to make `this` work in the callback
 //   this.handleClick = this.handleClick.bind(this);
 //  }

 //  handleClick() {
 //  // console.log(this.state.isToggleOn);
 //   this.setState(state => ({
 //    isToggleOn: !state.isToggleOn
 //   }));
 //  }

 //  render() {
 //   return (
 //    <button onClick={this.handleClick}>
 //        {this.state.isToggleOn ? 'ON' : 'OFF'}
 //      </button>
 //   );
 //  }
 // }

 // ReactDOM.render(
 //  <Toggle />,
 //  document.getElementById('root')
 // );


 // let car = {
 //  reg: 'erygdh',
 //  brand: 'tata',
 //  displayDetails: function() {
 //   console.log(this.reg + " " + this.brand);
 //  }
 // }
 // let foreg = car.displayDetails.bind(car);
 // foreg();


 const numbers = [1, 2, 34, 4, 45];
 const listItems = numbers.map((numbers) =>
  <li>{numbers}</li>
 );

 ReactDOM.render(<ul>{listItems}</ul>, divRootId);



 //  const numbers = [1, 2, 3, 4, 5];
 // const listItems = numbers.map((numbers) =>
 //   <li>{numbers}</li>
 // );

 // ReactDOM.render(
 //   <ul>{listItems}</ul>,
 //   document.getElementById('root')
 // );
 