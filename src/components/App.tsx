import React from 'react';
import Panel from './panel/Panel.tsx';
import Screen from './screen/Screen.tsx';
import Statusbar from './statusbar/Statusbar.tsx';
import Structure from './structure/Structure.tsx';
import Inspector from './inspector/Inspector.tsx';
// import './App.scss';

function App(): JSX.Element {
  return (
    <div className="app">
      <header>
        <Panel enable={1} />
      </header>
      <article className="app-article">
        <Structure />
        <Screen />
        <Inspector />
      </article>
      <footer>
        <Statusbar />
      </footer>
    </div>
  );
}

export default App;
