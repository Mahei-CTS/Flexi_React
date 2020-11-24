import React, {Component,Flexi,render,Hello} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Flex from './Flex';
import reportWebVitals from './reportWebVitals';

const flexiConfig = {
  items: [
      {
        "name": "person_name",
        "label": "Person's Name",
        "type": 'TextField',
      },
      {
        "name": "states",
        "label": "Person's state",
        "type": "DropDown",
            "values": [
            "Maharashtra",
            "Kerala",
            "Tamil Nadu"
            ]
      }
    ]
};

class flex extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      place: 'somewhere',      
    };
  }

  onFlexSubmit = (val) => {
    this.setState({ name: val.name, place: val.dd });
  }

  render() {
    return (
      <div>
        <Flexi onSubmitFn={this.onFlexSubmit} config={flexiConfig.items} />
        <Hello name={this.state.name} place={this.state.place} />
        <button type='button' id='myBtn'>test</button>
      </div>
    );
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
render(<flex />, document.getElementById("root"));
