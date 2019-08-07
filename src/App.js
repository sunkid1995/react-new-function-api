import React from 'react';
import './App.css';

// Component React memo
import CountMemo from './Component/CountMemo';

// Component React hooks
import FormUserHooks from './Component/FormUserHooks';
import Form2Hooks from './Component/FormUserHooks/Form2Hooks';

// Higher Order Components
import ButtonOne from './Component/HOC/ButtonOne';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      totalMemo: 1,
      name: 'binh',
      age: 23,
      city: "Thai binh"
    }
  }

  componentDidMount() {
    // setInterval(() => {
    //   this.setState({ totalMemo: 1 });
    // }, 2000);
  }

  render() {
    return (
      <div className="App">
      <button onClick={() => this.setState({ name: 'hahahah' })}>
        change
      </button>
        <CountMemo value={this.state.totalMemo} />
        <hr />
        <FormUserHooks />
        <hr />
        <ButtonOne disable />
        <hr />
        <Form2Hooks
         {...this.state}
        />
      </div>
    );
  }
}
