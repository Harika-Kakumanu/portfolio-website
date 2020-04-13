/*global ReactDOM*/

const root = document.getElementById('root'),
    root2 = document.getElementById('root2'),
    root3 = document.getElementById('root3');

function Strikethrough(props) {
    return <strike>{props.text}</strike>;
}
const element = <Strikethrough text='reactJs is not widely used'/>

ReactDOM.render(element, root);

function SuccessMessage(props) {
    return <div className='success'>{props.messageText}</div>
}

function WarningMessage(props) {
    return <div className='warning'>{props.messageText}</div>
}

function InfoMessage(props) {
    return <div className='info'>{props.messageText}</div>
}

function ErrorMessage(props) {
    return <div className='error'>{props.messageText}</div>
}

function AlertMessage(props) {

    if (props.messageType === 'success') {
        return <SuccessMessage messageText = {props.messageText }/>
    }
    else if (props.messageType === 'warning') {
        return <WarningMessage messageText={props.messageText}/>
    }
    else if (props.messageType === 'info') {
        return <InfoMessage messageText={props.messageText}/>
    }
    else if (props.messageType === 'error') {
        return <ErrorMessage messageText={props.messageText}/>
    }

}

ReactDOM.render(<AlertMessage messageType='info' messageText='InfoMessage'/>, root2);

function StandardImageView() {
    return <img className = 'standardImage' src = 'assets/koru-sprial-shape.jpg'/>
}

function RoundedCornersImageView() {
    return <img className = 'roundCornerImage' src = 'assets/koru-sprial-shape.jpg'/>
}

function CircularImageView() {
    return <img className = 'circularImage' src = 'assets/koru-sprial-shape.jpg'/>
}

function ImageViews() {
    return <div>
    <StandardImageView /> <RoundedCornersImageView/> <CircularImageView/>
    </div>
}
ReactDOM.render(<ImageViews/>, root3);
