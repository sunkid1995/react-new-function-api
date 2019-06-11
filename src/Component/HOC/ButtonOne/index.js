import React from 'react';

// HOC
import StylesWrapped from '../StylesWrapped';

const ButtonOne = props => {
  console.log('props btn: ', props);
  return (
    <React.Fragment>
      <h1>{'Demo higher order components'}</h1>

      <button
        style={props.styles}
      >
        {'This is button one'}
      </button>
    </React.Fragment>
  );
}

export default StylesWrapped(ButtonOne);
