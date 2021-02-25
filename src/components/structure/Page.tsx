import React from 'react';

interface Props {
  name: string;
}

function Page(props: Props): JSX.Element {
  const { name } = props;
  return (
    <div className="page">
      <div className="page-color" />
      <div className="page-name">{name}</div>
    </div>
  );
}

export default Page;
