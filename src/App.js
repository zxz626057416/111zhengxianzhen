import React from 'react';





export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    );
  }
}
