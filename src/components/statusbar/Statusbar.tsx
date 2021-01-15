import React from 'react';
// import './Statusbar.scss';

interface Props {

}

interface State {

}

class Statusbar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='statusbar'/>
    )
  }
}

export default Statusbar;
