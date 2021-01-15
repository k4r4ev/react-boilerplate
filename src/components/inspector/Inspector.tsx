import React from 'react';
// import './Inspector.scss';

interface Props {

}

interface State {

}

class Inspector extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render(): JSX.Element {
    return (
      <div className="inspector">
        <h2 className="inspector-title">Inspector</h2>
      </div>
    );
  }
}

export default Inspector;
