import React from 'react';

interface Props {
  name: string
}

function Element(props: Props): JSX.Element {
  const { name } = props;
  return (
    <button type="button" className="element">
      <span className="element__name">{name}</span>
    </button>
  );
}

export default Element;
