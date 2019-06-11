import React, { useState } from 'react';

export default function CountHooks () {
  const [ age, setAge ] = useState(null);
  const [ name, setName ] = useState(null);
  const [ checked, setChecked ] = useState(false);

  function onChangeAge(value) {
    setAge(value);
  }

  function onChangeName(value) {
    setName(value);
  }

  console.log('age:', age);

  return (
    <div>
      <h1>{'Demo Hooks'}</h1>
      {checked ?
        <React.Fragment>
          <p>age: {age}</p>
          <p>name: {name}</p>
        </React.Fragment>
        :
        <React.Fragment>
          {'Click save'}
        </React.Fragment>
      }
      <p>
        name:
        <input
          placeholder="Insert name"
          value={age || ''}
          onChange={event => onChangeAge(event.target.value)}
        />
      </p>

       <p>
        age:
        <input
          placeholder="Insert age"
          value={name || ''}
          onChange={event => onChangeName(event.target.value)}
        />
      </p>
      <button
        onClick={() => setChecked(!checked)}
      >
        save info
      </button>
    </div>
  );
}