import React, { useState } from 'react';
import Page from './Page';

function Structure(): JSX.Element {
  const [pages] = useState([{ name: 'Математика' }, { name: 'Домашка на завтра' }, { name: 'Мысли за вчерашний день' }]);
  return (
    <div className="structure">
      <h2 className="structure-title">Pages</h2>
      {pages.map((page) => (
        <React.Fragment key={page.name}>
          <Page name={page.name} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default Structure;
