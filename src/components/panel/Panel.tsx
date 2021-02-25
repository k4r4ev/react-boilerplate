import React from 'react';
import AspectRatio from '@material-ui/icons/AspectRatio';
import Element from './Element';

function Panel(): JSX.Element {
  const elements = [{ name: 'div' }, { name: 'span' }, { name: 'button' }];
  return (
    <div className="panel">
      <div className="panel__container">
        <span className="panel__logo">Verstak</span>
        <AspectRatio style={{ color: 'white' }} />
        <div className="panel__elements">
          {elements.map((element) => (
            <React.Fragment key={element.name}>
              <Element name={element.name} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Panel;
