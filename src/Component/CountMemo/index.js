import React from 'react';

// React memo
export default React.memo((props) => {
  console.log('Memo:', props.value);
  return (
    <div>
      <h1>{'Demo memo'}</h1>
      <p>this is value: {props.value}</p>
    </div>
  );
});
