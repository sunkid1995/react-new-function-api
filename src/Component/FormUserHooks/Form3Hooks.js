import React, { useState, useEffect, useRef } from 'react';

const Form3Hooks = props => {
  const { countProp } = props;

  const [ count, setCount ] = useState(0);


  /**
   * @description mounting react functions components -> componentDidMount
   */

  useEffect(() => {
    console.log('mounting');
  }, []);

   /**
    * @description comparing prevProps & props -> componentWillReceiveProps
    */

   const prevProps = useCheckedPrevProps({ countProp });

   useEffect(() => {
    if (prevProps === undefined) return;

    if (prevProps.countProp !== countProp) {
      console.log('props change');
    }

  }, [countProp]); // eslint-disable-line

  /**
   * @description comparing prevState & state -> componentDidUpdate
   */

  const prevState = useCheckedPrevState({ count });

  useEffect(() => {
    if (prevState === undefined) return;

    if (prevState.count !== count) {
      console.log('count change');

      if (count === 5) console.log('number === 5', 5);
    }

  }, [count]); // eslint-disable-line


  const onClickBtn = () => {
    setCount(count + 1);
  }

  return (
    <React.Fragment>
      <p><span>{'Count props:'}{countProp}</span></p>

      <hr />

      <p><span>{'Count:'}{count}</span></p>

      <button
        onClick={onClickBtn}
      >
        {'Click me'}
      </button>
    </React.Fragment>
  );
}

// prev state
function useCheckedPrevState(state) {
  const useRefState = useRef();

  useEffect(() => {
    useRefState.current = state;
  });

  return useRefState.current;
}

// prev props
function useCheckedPrevProps(props) {
  const useRefProps = useRef();

  useEffect(() => {
    useRefProps.current = props;
  });

  return useRefProps.current;
}

export default Form3Hooks;
