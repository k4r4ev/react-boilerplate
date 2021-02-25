import React from 'react';
import Panel from './panel/Panel';
import Screen from './screen/Screen';
import Statusbar from './statusbar/Statusbar';
import Structure from './structure/Structure';

function App(): JSX.Element {
  return (
    <div className="app">
      <header>
        <Panel />
      </header>
      <article className="app-article">
        <Structure />
        <Screen />
      </article>
      <footer>
        <Statusbar scale={100} />
      </footer>
    </div>
  );
}

export default App;
