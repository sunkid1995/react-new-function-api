import React from 'react';
import './App.css';

// Component React memo
import CountMemo from './Component/CountMemo';

// Component React hooks
import FormUserHooks from './Component/FormUserHooks';

// Higher Order Components
import ButtonOne from './Component/HOC/ButtonOne';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      totalMemo: 1
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
        <CountMemo value={this.state.totalMemo} />
        <hr />
        <FormUserHooks />
        <hr />
        <ButtonOne disable />
      </div>
    );
  }
}
