import React from 'react';
// import './Element.scss';

interface Props {
  name: string
}

interface State {
  status: boolean
}

class Element extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = null;
  }

  render(): JSX.Element {
    const { props } = this;
    return (
      <button type="button" className="element">
        <span className="element__name">{props.name}</span>
      </button>
    );
  }
}

export default Element;
