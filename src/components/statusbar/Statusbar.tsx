import React from 'react';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

interface Props {
  scale: number;
}

function Statusbar(props: Props): JSX.Element {
  const { scale } = props;
  return (
    <div className="statusbar">
      <Remove style={{ color: 'white', fontSize: 20 }} />
      <span className="statusbar__text">{scale}</span>
      <Add style={{ color: 'white', fontSize: 20 }} />
    </div>
  );
}

export default Statusbar;
