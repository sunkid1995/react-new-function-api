import React, { useState, useEffect, useRef } from 'react';

export default function Form2Hooks(props) {
  const [ data, handlOnChange ] = handleOnchangeInput(props);

  // get prev props
  const prevProps = checkPrevProps(data);

  // check prev props
  useEffect(() => {
    if (prevProps.current.name !== props.name) {

    }
  }, [prevProps, props]);

  return (
    <React.Fragment>
      <div>
        <form>
          <input
            name="name"
            placeholder="Insert name"
            value={data.name}
            onChange={handlOnChange}
          />

          <br />

           <input
            name="age"
            placeholder="Insert age"
            value={data.age}
            onChange={handlOnChange}
          />

          <br />

          <input
            name="city"
            placeholder="Insert city"
            value={data.city}
            onChange={handlOnChange}
          />
        </form>
      </div>
    </React.Fragment>
  );
}

function handleOnchangeInput(initState) {
  const [ values, setValues ] = useState(initState); // eslint-disable-line
  return [
    values,
    event => {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    }
  ]
}

function checkPrevProps(props) {
  const prevProps = useRef(); // eslint-disable-line

  useEffect(() => { // eslint-disable-line
    prevProps.current = props;
  });

  return prevProps;
}