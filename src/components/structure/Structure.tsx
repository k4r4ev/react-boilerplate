import React from 'react';
// import './Structure.scss';

interface Props {

}

interface State {

}

class Structure extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="structure">
        <h2 className="structure-title">Structure</h2>
      </div>
    );
  }
}

export default Structure;
