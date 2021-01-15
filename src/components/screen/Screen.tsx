import React from 'react';
// import './Screen.scss';

interface Props {

}

interface State {

}

class Screen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='screen'/>
    )
  }
}

export default Screen;
