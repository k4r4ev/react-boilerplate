import React from 'react';
// import './Panel.scss';
import Element from './Element.tsx';

interface Props {
  enable: boolean;
}

interface State {
  example: string;
}

class Panel extends React.Component<Props, State> {
  elements = [{ name: 'div' }, { name: 'span' }, { name: 'button' }]

  constructor(props: Props) {
    super(props);
    this.state = null;
  }

  render(): JSX.Element {
    return (
      <div className="panel">
        <div className="panel__container">
          <span className="panel__logo">Boilerplate</span>
          <div className="panel__elements">
            {this.elements.map((element) => (
              <React.Fragment key={element.name}>
                <Element name={element.name} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Panel;
