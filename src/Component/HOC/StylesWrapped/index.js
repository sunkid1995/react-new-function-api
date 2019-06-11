import React from 'react';

import ButtonStyles from '../ButtonStyles';

// HOC cach 1
// export default (WrappedComponents) => {
//   return function WrappedRender(args) {
//     return WrappedComponents(checkedProps(args));
//   }
// }

// HOC cach 2
export default (WrappedComponents) => {
  return class RenderComponents extends React.Component {
    render() {
      const props = checkedProps(this.props);

      let newProps = { ...props, danchoi: 10 }

      return <WrappedComponents {...newProps} />
    }
  }
}

// checked coditions props
const checkedProps = props => {

  let _newStyles = { ...ButtonStyles.default };

  if (props.disable) {
    _newStyles = { ...ButtonStyles.default, ...ButtonStyles.disable };
  }

  const newProps = { ...props, styles: _newStyles }

  return newProps;
}